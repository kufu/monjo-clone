// public/release-notes にシンボリックリンクを作成して、content/配下のリリースノートのパスにアクセスできるようにする
// content配下に入っている画像ファイルをpublic配下と認識させて配布するため。
import fs from 'fs'
import path from 'path'

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

  fs.mkdirSync(articlesDirectory, { recursive: true })

  articles.forEach((article) => {
    const actualDirectory = path.join(process.cwd(), 'content', article.directory)
    const publicDirectory = path.join(articlesDirectory, article.id)

    fs.symlinkSync(actualDirectory, publicDirectory, 'dir')
  })
})().then(() => {
  console.log('[development] Create symolink for content')
})
