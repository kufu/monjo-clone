// content/release-notes 配下の画像をpublic/release-notesにコピーして、publicとして配信できるようにする。
// 開発環境ではsymbolic linkを利用して全てのcontentを公開しているが、本番環境では必要なファイルのみ公開したいため。
import fs from 'fs'
import glob from 'glob'
import path from 'path'
import { promisify } from 'util'

import { getAllArticles } from '../../utils/api'
import { assertRootDir } from './assertCurrentDir'

// 現在のディレクトリがプロジェクトルートであることを確認する
const root = process.cwd()
assertRootDir(root)
;(async () => {
  const articles = await getAllArticles()
  const articlesDirectory = path.join(process.cwd(), 'public', 'articles')

  if (fs.existsSync(articlesDirectory)) {
    fs.rmSync(articlesDirectory, { recursive: true, force: true })
  }

  for (const article of articles) {
    const actualDirectory = path.join(process.cwd(), 'content', article.directory)
    const publicDirectory = path.join(articlesDirectory, article.id)

    const extensions = ['gif', 'jpeg', 'jpg', 'png']
    const globQuery = path.join(actualDirectory, `*.@(${extensions.join('|')})`)
    const files = await promisify(glob)(globQuery)

    for (const from of files) {
      const to = path.join(publicDirectory, path.basename(from))
      fs.mkdirSync(publicDirectory, { recursive: true })
      fs.copyFileSync(from, to)
      console.log(`Copy ${from} to ${to}`)
    }
  }
})().then(() => {
  console.log('[production] Copy images from content to public')
})
