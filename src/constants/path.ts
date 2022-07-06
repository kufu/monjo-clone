import { Product } from '@/utils/api'

export const internalPath = {
  top: () => '/',
  section: (sectionId: string) => `/sections/${sectionId}`,
  releaseNotesTop: () => `/release-notes`,
  releaseNotesForProduct: (product: Product) => `/release-notes/${product}`,
  releaseNotesForProductByPage: (product: Product, pageNumber: number) => `/release-notes/${product}/page/${pageNumber}`,
  releaseNote: (product: Product, date: string, id: string) => `/release-notes/${product}/${date}/${id}`,
}

export const externalUrl = {
  smartHrJp: () => 'https://smarthr.jp',
  facebook: () => 'https://www.facebook.com/smarthrjp',
  twitter: () => 'https://twitter.com/smarthr_jp',
  school: () => 'https://school.smarthr.jp/',
  mag: () => 'https://mag.smarthr.jp/',
  guide: () => 'https://mag.smarthr.jp/guide/',
  contact: () => 'https://smarthr.jp/contact',
  contactCs: () => 'https://smarthr.jp/contact_cs',
}

// NOTE: Zendeskの各ページへのURL。
// ヘルプサイト・リリースノートは段階的に移行するため、一時的に monjo → Zendeskへのリンクが必要になる。
export const zendeskUrl = {
  top: () => 'https://knowledge.smarthr.jp/',
  guideForAdmin: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360005217334',
  guideForEmployee: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360005217354',
  settings: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360005254993',
  procedures: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360005254973',
  employeeList: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360005255013',
  eGovRequests: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360005255053',
  salaryPayrolls: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360005255033',
  taxWithholdings: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360005255073',
  myNumbers: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360005217374',
  workFlows: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360005217394',
  fileUploader: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360006608413',
  customMeibo: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360005255093',
  soshikizu: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360012484033',
  nencho: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360005255113',
  appIntegration: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360005255753',
  samlSsoAuthentication: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360005759054',
  keiyaku: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360005255733',
  report: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360005218154',
  survey: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360008852734',
  evaluation: () => 'https://knowledge.smarthr.jp/hc/ja/sections/4406859570073',
  route: () => 'https://knowledge.smarthr.jp/hc/ja/sections/4414399823641',
  security: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360005256053',
  plan: () => 'https://knowledge.smarthr.jp/hc/ja/sections/360005256073',
  api: () => 'https://knowledge.smarthr.jp/hc/ja/sections/900001092166-SmartHR-API',
}
