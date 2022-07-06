export const products = [
  'smarthr',
  'app-integrations',
  'keiyaku',
  'doc',
  'report',
  'survey',
  'evaluation',
  'route',
  'api',
] as const

export type Product = typeof products[number]

// 届出書類は一覧では公開しない
export const hiddenProducts = ['doc']

export const productIdMap: { [key in Product]: string } = {
  smarthr: '360009639973',
  'app-integrations': '4404611194137',
  doc: '360009623834',
  keiyaku: '360009586714',
  report: '4410294055833',
  survey: '900000918806',
  evaluation: '4408484346265',
  route: '4475942210969',
  api: '1500000381362',
}
