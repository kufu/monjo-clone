import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import { v4 as uuidv4 } from 'uuid'
import yargs from 'yargs'

import { convertSectionToDirectories, getSectionById, Product, productIdMap, products } from '../utils/api'

const argv = yargs(process.argv.slice(2))
  .options({
    date: {
      type: 'string',
      description: 'リリースノートを作成する日付',
    },
    product: {
      type: 'string',
      description: 'プロダクト名',
    },
  })
  .help().argv

type Options = {
  date: Date
  product: Product
}

const createYYYYMMDD = (date: Date, delimiter = '-'): string => {
  const monthMM = (date.getMonth() + 1).toString().padStart(2, '0')
  const dayDD = date.getDate().toString().padStart(2, '0')

  return `${date.getFullYear().toString()}${delimiter}${monthMM}${delimiter}${dayDD}`
}

const parseArgv = (val: { date: string | undefined; product: string | undefined }): Options => {
  let date: Date
  let product: Product

  if (val['date']) {
    date = new Date(String(val['date']))
  } else {
    date = new Date()
  }

  if (products.includes(val['product'] as Product)) {
    product = val['product'] as Product
  } else {
    throw new Error(`--product ${val['product']} is not valid`)
  }

  return {
    date,
    product,
  } as Options
}

const template = fs.readFileSync(path.join(process.cwd(), 'src', 'scripts', 'createNewReleaseNote', 'template.md')).toString()

;(async () => {
  const options = parseArgv(await Promise.resolve(argv))
  const sectionId = productIdMap[options.product]
  const section = await getSectionById(sectionId)
  const directories = await convertSectionToDirectories(section)

  let contentDir = path.join(process.cwd(), 'content', ...directories, createYYYYMMDD(options.date, '-'))
  let count = 0

  while (fs.existsSync(contentDir)) {
    count++
    contentDir = path.join(
      process.cwd(),
      'content',
      ...directories,
      `${createYYYYMMDD(options.date, '-')}_${count.toString().padStart(2, '0')}`,
    )
  }

  const distPath = path.join(contentDir, 'ja.md')
  const content = template.replace('%{id}', uuidv4()).replace('%{date}', createYYYYMMDD(options.date, '/'))

  await promisify(fs.mkdir)(contentDir)
  await promisify(fs.writeFile)(distPath, content)

  console.log(`${distPath} を作成しました`)
})()
