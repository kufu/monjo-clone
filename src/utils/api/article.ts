import fs from 'fs'
import glob from 'glob'
import matter, { GrayMatterFile } from 'gray-matter'
import yaml from 'js-yaml'
import path from 'path'
import { promisify } from 'util'

import { detectLabelsFromMarkdown } from '../detectLabelsFromMarkdown'
import { escapeRegex } from '../escapeRegex'
import { isString } from '../isString'
import { pick } from '../pick'
import { contentDirectory } from './directory'
import { Label, labels } from './label'
import { defaultLocale, Locale, locales } from './locale'
import { productIdMap } from './releaseNote'
import { convertSectionToDirectories, getAllSections, getSectionById, Section } from './section'

export type ArticleHeader = {
  id: string
  date?: string // リリースノートは日付を持つ
  labels: Label[]
  sortKey: string // ソートに利用する実値
  directory: string // ファイルの実体があるディレクトリ
  sectionId: string
  titleLocales: { [key: Locale]: string }
}

export type Article = {
  bodyLocales: { [key: Locale]: string }
} & ArticleHeader

export type ArticleQuery = {
  sectionId?: string
  locale?: Locale | Locale[]
}

const isReleaseNote = (sectionId: string): boolean => {
  return Object.values(productIdMap).includes(sectionId)
}

const readMarkdown = async (filePath: string): Promise<GrayMatterFile<string>> => {
  const fileBody = await fs.promises.readFile(filePath, 'utf8')
  return matter(fileBody)
}

const buildSectionQuery = async (sectionId: string): Promise<string> => {
  const section = await getSectionById(sectionId)
  const sectionDirectories = await convertSectionToDirectories(section)
  const escapedSectionDirectories = sectionDirectories.map(escapeRegex)

  return escapedSectionDirectories.join(path.sep)
}

// 記事の一覧を探索したパスの結果を返す
const getArticleFiles = async (sectionId?: string, directory?: string): Promise<string[]> => {
  const sectionQuery = sectionId ? await buildSectionQuery(sectionId) : '**'
  const directoryQuery = directory ? escapeRegex(directory) : '**'

  // globのシンタックスはこちら
  // https://github.com/isaacs/node-glob#glob-primer
  const markdownFiles = locales.map((locale) => `${locale}.md`)
  const globQuery = path.join(contentDirectory, sectionQuery, directoryQuery, `@(${markdownFiles.join('|')})`)

  // 指定されたクエリでファイルを探索する
  const files = await promisify(glob)(globQuery)

  return files
}

const assertArticle = (article: Partial<Article>): article is Article => {
  const messages: string[] = []

  if (!article['id']) {
    messages.push('idが空です')
  }

  if (!article['sectionId']) {
    messages.push('sectionIdが不正です。パース処理のロジックに不具合があります。')
  }

  if (article['labels']?.some((label: Label) => !labels.includes(label))) {
    const invalidLabels = article.labels.filter((label) => !labels.includes(label))

    messages.push(`labelsに不正な値が指定されています${invalidLabels}。指定できる値は${labels}のいずれかです`)
  }

  if (messages.length > 0) {
    throw new Error(`${messages.join(',')} (${JSON.stringify(article)})`)
  }

  return true
}

export const readArticleFile = async (filePath: string): Promise<Partial<Article>> => {
  const matterFile = await readMarkdown(filePath)
  const localeRe = new RegExp(`(${locales.join('|')})\\.md$`)
  const header = pick(matterFile.data, 'id', 'labels')
  const match = filePath.match(localeRe)

  if (!match) {
    throw new Error(
      `ファイル名は "locale.md" にしてください。localeには(${locales.join(', ')})のいずれかが利用できます。 ${filePath}`,
    )
  }

  // 記事と同じディレクトリにarticle.ymlがあれば、共通のメタ情報として利用する
  const articleYaml = path.join(path.dirname(filePath), 'article.yml')
  let sharedHeader: Partial<Pick<Article, 'id' | 'labels' | 'titleLocales' | 'bodyLocales'>> = {}

  if (await promisify(fs.exists)(articleYaml)) {
    const rawYaml = await fs.promises.readFile(articleYaml, 'utf-8')
    const articleSharedHeader = yaml.load(rawYaml) as { [key: string]: any }

    sharedHeader = pick(articleSharedHeader, 'id', 'labels')

    if (isString(articleSharedHeader['title'])) {
      sharedHeader.titleLocales = {
        [defaultLocale]: articleSharedHeader['title'],
      }
    }
  }

  const locale = match[1] as Locale
  const articleHeader = Object.assign(sharedHeader, header)

  articleHeader.titleLocales ||= {}
  articleHeader.bodyLocales ||= {}

  articleHeader.titleLocales[locale] = matterFile.data['title'] || articleHeader.titleLocales[defaultLocale]
  articleHeader.bodyLocales[locale] = matterFile.content

  return articleHeader
}

const parseArticleDirectory = async (section: Section, directory: string): Promise<Article | null> => {
  const article: Partial<Article> = {
    id: '',
    labels: [],
    sectionId: section.id,
    sortKey: directory,
    titleLocales: {},
    bodyLocales: {},
    directory: path.join(...(await convertSectionToDirectories(section)), directory),
  }

  const articleFiles = await getArticleFiles(section.id, directory)

  if (articleFiles.length === 0) {
    throw new Error(`セクションの配下に記事が存在しませんでした ${section.id}/${directory}`)
  }

  const parsedArticles = await Promise.all(articleFiles.map(readArticleFile))

  // リリースノートは日付を持つ
  if (isReleaseNote(section.id)) {
    article.date = directory
  }

  for (const parsedArticle of parsedArticles) {
    // リリースノートはラベルを自動的に記事から抽出する
    if (isReleaseNote(section.id)) {
      parsedArticle.labels = detectLabelsFromMarkdown(parsedArticle.bodyLocales!['ja'])
    }

    if (Object.prototype.hasOwnProperty.call(parsedArticle, 'id')) {
      article.id = parsedArticle.id
    }

    if (Object.prototype.hasOwnProperty.call(parsedArticle, 'labels')) {
      article.labels = (parsedArticle.labels || []).sort((a, b) => (labels.indexOf(a) < labels.indexOf(b) ? -1 : 1))
    }

    Object.assign(article.titleLocales!, parsedArticle.titleLocales)
    Object.assign(article.bodyLocales!, parsedArticle.bodyLocales)
  }

  if (assertArticle(article)) {
    return article
  } else {
    throw new Error('unreachable in TypeScript')
  }
}

// すべての記事の一覧を返す
const loadArticles = async (): Promise<Article[]> => {
  const articles = []
  const sections = await getAllSections()
  const endpointSections = sections.filter((section) => section.childrenIds.length === 0)

  for (const section of endpointSections) {
    const sectionArticles = await getArticlesBySectionId(section.id)
    articles.push(...sectionArticles)
  }

  return [...articles.values()]
}

// すべてのセクションを返す
let allArticles: Article[]
export const getAllArticles = async (): Promise<Article[]> => {
  // 開発環境では毎回記事を読み直す
  if (process.env.NODE_ENV === 'production' || process.env.CI) {
    allArticles ||= await loadArticles()
  } else {
    allArticles = await loadArticles()
  }

  return allArticles
}

export const sortKeyDesc = (a: Article, b: Article): number => {
  return a.sortKey < b.sortKey ? 1 : -1
}

// IDを元に単一のArticleを返す
export const getArticleById = async (articleId: string): Promise<Article> => {
  const all = await getAllArticles()
  const article = all.find((s) => s.id === articleId)

  if (!article) {
    throw new Error(`Couldn't find Article with id = ${articleId}`)
  }

  return article
}

// セクションIDを元にArticleの一覧を返す
export const getArticlesBySectionId = async (sectionId: string): Promise<Article[]> => {
  const section = await getSectionById(sectionId)

  const articleFiles = await getArticleFiles(section.id)
  const articles = new Map<string, Article>()

  for (const articleFile of articleFiles) {
    const articleFullDirectory = path.dirname(articleFile)

    if (!articles.has(articleFullDirectory)) {
      const directories = path.dirname(articleFile).split(path.sep)
      const dirname = directories[directories.length - 1]
      const article = await parseArticleDirectory(section, dirname)

      if (article) {
        articles.set(articleFullDirectory, article)
      }
    }
  }

  return [...articles.values()]
}
