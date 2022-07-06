import glob from 'fast-glob'
import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'

import { formatIndex } from '../formatIndex'
import { contentDirectory } from './directory'
import { Locale } from './locale'

// Zendeskに格納されているSectionのうち、一部の要素をmonjoに移行する
// https://github.com/kufu/moving-from-zendesk/blob/main/src/zendesk.d.ts のSectionResponseが含む値の一部
export type Section = {
  id: string
  position: number
  locales: { [key: Locale]: string }
  parentId: string // 親セクションID
  childrenIds: string[] // 子セクションID
}

const loadSections = async (): Promise<Section[]> => {
  // globのシンタックスはこちら
  // https://github.com/isaacs/node-glob#glob-primer
  const globQuery = path.join(contentDirectory, '**', `section.yml`)

  // 高階層のディレクトリからパース処理を行う
  // 低階層のディレクトリの処理をするときに、必ず親ディレクトリのパース処理が終わっていると、親セクションの格納が楽なため。
  const sortByHierarchy = (a: string, b: string): number => {
    const aHierarchy = a.split(path.sep).length
    const bHierarchy = b.split(path.sep).length

    if (aHierarchy === bHierarchy) {
      return 0
    } else if (aHierarchy < bHierarchy) {
      return -1
    } else {
      return 1
    }
  }

  // 指定されたクエリでファイルを探索する
  const sectionYamlFiles = (await glob([globQuery], { deep: 10 })).sort(sortByHierarchy)

  const sectionMap = new Map<string, Section>()

  for (const sectionYamlFile of sectionYamlFiles) {
    const sectionDirectory = path.relative(contentDirectory, path.dirname(sectionYamlFile))

    // section.ymlに記載されたメタ情報を読み込む
    const rawYaml = await fs.promises.readFile(sectionYamlFile, 'utf-8')
    const section = yaml.load(rawYaml) as Section
    section.childrenIds = []

    const splitted = sectionDirectory.split(path.sep)
    const positionStr = splitted[splitted.length - 1].match(/^(\d{2})_/)
    section.position = positionStr ? parseInt(positionStr[0], 10) : 0

    // 親階層のセクションを格納する
    const parentDirectory = sectionDirectory.split(path.sep).slice(0, -1).join(path.sep)

    if (parentDirectory) {
      if (!sectionMap.has(parentDirectory)) {
        throw new Error(`sortByHierarchyのロジックが間違っている可能性があります ${parentDirectory}`)
      }

      const parentSection = sectionMap.get(parentDirectory)!
      section.parentId = parentSection.id
      parentSection.childrenIds.push(section.id)
    }

    sectionMap.set(sectionDirectory, section)
  }

  return [...sectionMap.values()]
}

// すべてのセクションを返す
let allSections: readonly Section[]
export const getAllSections = async () => (allSections ||= await loadSections())

// IDを元に単一のSectionを返す
export const getSectionById = async (sectionId: string): Promise<Section> => {
  const all = await getAllSections()
  const section = all.find((s) => s.id === sectionId)

  if (!section) {
    throw new Error(`Couldn't find Section with id = ${sectionId}`)
  }

  return section
}

// [親階層, 小階層, ...] の順にセクション階層を抽出して返す
export const extractSectionHierarchy = async (section: Section): Promise<Section[]> => {
  let current: Section | null = section
  const sections = []

  while (current) {
    sections.unshift(current)
    current = current.parentId ? await getSectionById(current.parentId) : null
  }

  return sections
}

export const convertSectionToDirectories = async (s: Section): Promise<string[]> => {
  return (await extractSectionHierarchy(s)).map((section) => `${formatIndex(section.position)}_${section.locales['ja']}`)
}
