// SmartHRの各サービスでは、ヘッダーに最新のリリースノートを数件表示している
// このscriptでは、public/release-notes/${product}.json に最新N件のリリースノートをJSONで書き出しておくことで、上記の箇所にリリースノート一覧を表示できるAPI(静的)を用意している。

import fs from 'fs'
import path from 'path'

import { internalPath } from '../constants/path'
import { getArticlesBySectionId, hiddenProducts, productIdMap, products, sortKeyDesc } from '../utils/api'

const MAX_PER_PRODUCT = 5

;(async () => {
  const distDir = path.join(process.cwd(), 'public', 'release-notes')

  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true })
  }

  fs.mkdirSync(distDir, { recursive: true })

  await Promise.all(
    products
      .filter((product) => !hiddenProducts.includes(product))
      .map(async (product) => {
        const distPath = path.join(distDir, `${product}.json`)
        const sectionId = productIdMap[product]
        const articles = (await getArticlesBySectionId(sectionId)).sort(sortKeyDesc)
        const articleHeaders = articles.slice(0, MAX_PER_PRODUCT)

        const releaseNotes = articleHeaders.map((article) => ({
          id: article.id,
          title: article.titleLocales['ja'],
          url: `https://support.smarthr.jp/ja${internalPath.releaseNote(product, article.date!, article.id)}`,
        }))

        const body = {
          releaseNotes,
        }

        fs.writeFileSync(distPath, JSON.stringify(body, null, '  '), 'utf8')
        console.log(`Write ${distPath}`)
      }),
  )
})()
