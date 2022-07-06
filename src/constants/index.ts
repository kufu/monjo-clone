import {
  FaKeyIcon,
  IconComponentProps,
  SmartHRApirenkeiIcon,
  SmartHRBunsekireportIcon,
  SmartHRBunsyohaihuIcon,
  SmartHRConnectIcon,
  SmartHRDenshishinseiIcon,
  SmartHRFileuploadIcon,
  SmartHRGensenchousyuuhyouIcon,
  SmartHRJinjihyoukaIcon,
  SmartHRJugyouindatabaseIcon,
  SmartHRJugyouinsurveyIcon,
  SmartHRKyuuyomeisaiIcon,
  SmartHRMynumberIcon,
  SmartHRNenmatsuchouseiIcon,
  SmartHRSecurityIcon,
  SmartHRSetteiIcon,
  SmartHRShinseiIcon,
  SmartHRSoshikizuIcon,
  SmartHRSyainmeiboIcon,
  SmartHRTetsuzukiIcon,
  SmartHRTsuukinkeirokensakuIcon,
  SmartHRYenIcon,
} from '@/components/ui'
import { Label, Product } from '@/utils/api'

import { externalUrl, internalPath, zendeskUrl } from './path'

export { externalUrl, internalPath, zendeskUrl }
export const CONTENT_WIDTH = '1008px'

export const DEV_HOST = 'namero.systems:3110'
export const ZENDESK_HOST = 'knowledge.smarthr.jp'

export const META_DESCRIPTION = {
  help: 'SmartHRの使い方を確認できます。まずは検索してみてください。',
  releaseNote: '新機能や改善など、SmartHRの日々のアップデート情報を確認できます。',
}

// NOTE: いずれのラベルにも該当しない場合は、positiveとして扱う。
export const POSITIVE_LABELS: Label[] = ['新機能', '改善', 'アクセシビリティ']
export const NEGATIVE_LABELS: Label[] = ['不具合修正', '廃止した機能']

export const HELP_PAGE_LABELS: Label[] = [
  'スモールプラン',
  'スタンダードプラン',
  'プロフェッショナルプラン',
  '¥0プラン',
  '有料オプション',
  '人材マネジメントプラン',
]

export const MAX_ITEMS_PER_PAGE = 30
export const MAX_ITEMS_PER_PRODUCT = 6

// TODO: 仮置き。Phase2でデータの持ち方はちゃんと考える。
export const HEADER_LOCALE_OPTIONS = [
  {
    label: '日本語',
    value: 'ja',
  },
  {
    label: 'English (US)',
    value: 'en-us',
  },
  {
    label: '한국어',
    value: 'ko',
  },
  {
    label: 'Tiếng Việt',
    value: 'vi',
  },
]

// NOTE: productからからプロダクト名を引く
export const PRODUCT_DISPLAY_NAMES: {
  [key in Product]: string
} = {
  smarthr: 'SmartHR基本機能',
  survey: '従業員サーベイ',
  doc: '届出書類',
  keiyaku: '文書配付',
  evaluation: '人事評価',
  api: 'SmartHR API',
  report: '分析レポート',
  route: '通勤経路検索',
  'app-integrations': '各種サービス連携',
}

export const PRODUCT_ICONS: {
  [key in Product]: React.VFC<IconComponentProps>
} = {
  smarthr: SmartHRJugyouindatabaseIcon,
  survey: SmartHRJugyouinsurveyIcon,
  doc: SmartHRTetsuzukiIcon,
  keiyaku: SmartHRBunsyohaihuIcon,
  evaluation: SmartHRJinjihyoukaIcon,
  api: SmartHRApirenkeiIcon,
  report: SmartHRBunsekireportIcon,
  route: SmartHRTsuukinkeirokensakuIcon,
  'app-integrations': SmartHRConnectIcon,
}

// TODO: 仮置き。Phase2でデータの持ち方はちゃんと考える。
export const FAQ_LIST = [
  { href: '/', title: 'ログイン・通知用メールアドレスを設定（変更）する' },
  { href: '/', title: 'エラーが出たり、処理に失敗した場合は？' },
  { href: '/', title: 'カスタム権限を追加する' },
  { href: '/', title: '招待メールを再送する' },
  { href: '/', title: '従業員以外のアカウント（＝メンバー権限ではないアカウント）をSmartHRに追加・招待する' },
  { href: '/', title: '【一覧】SmartHRでの電子申請に対応している書類' },
  { href: '/', title: '年末調整の対象となる従業員を確認する' },
  { href: '/', title: 'Q. ［従業員情報］画面にない項目を新しく追加したい場合は？' },
  { href: '/', title: '住所変更をせず、通勤手当のみ変更したい場合は？<' },
] as const

export const FUNCTION_LIST = [
  {
    title: '設定',
    titleHref: zendeskUrl.settings(),
    Icon: SmartHRSetteiIcon,
    links: [
      {
        title: '権限',
        href: '/',
      },
      {
        title: 'メールアドレスアカウント',
        href: '/',
      },
      {
        title: '社員番号アカウント',
        href: '/',
      },
    ],
    moreHref: '/',
  },
  {
    title: '手続き',
    titleHref: zendeskUrl.procedures(),
    Icon: SmartHRTetsuzukiIcon,
    links: [
      {
        title: '手続き全般',
        href: '/',
      },
      {
        title: '入社の手続き',
        href: '/',
      },
      {
        title: '退職の手続き',
        href: '/',
      },
    ],
    moreHref: '/',
  },
  {
    title: '従業員リスト・従業員情報',
    titleHref: zendeskUrl.employeeList(),
    Icon: SmartHRJugyouindatabaseIcon,
    links: [
      {
        title: '従業員リスト',
        href: '/',
      },
      {
        title: '従業員情報',
        href: '/',
      },
      {
        title: '従業員情報の履歴管理',
        href: '/',
      },
    ],
    moreHref: '/',
  },
  {
    title: '電子申請',
    titleHref: zendeskUrl.eGovRequests(),
    Icon: SmartHRDenshishinseiIcon,
    links: [
      {
        title: '準備',
        href: '/',
      },
      {
        title: '使い方',
        href: '/',
      },
      {
        title: '活用例',
        href: '/',
      },
    ],
    moreHref: '/',
  },
  {
    title: '給与明細',
    titleHref: zendeskUrl.salaryPayrolls(),
    Icon: SmartHRKyuuyomeisaiIcon,
    links: [
      {
        title: '使い方',
        href: '/',
      },
      {
        title: 'よくある質問',
        href: '/',
      },
    ],
    moreHref: '/',
  },
  {
    title: '源泉徴収票',
    titleHref: zendeskUrl.taxWithholdings(),
    Icon: SmartHRGensenchousyuuhyouIcon,
    links: [
      {
        title: '使い方',
        href: '/',
      },
      {
        title: 'よくある質問',
        href: '/',
      },
    ],
    moreHref: '/',
  },
  {
    title: 'マイナンバー',
    titleHref: zendeskUrl.myNumbers(),
    Icon: SmartHRMynumberIcon,
    links: [
      {
        title: '使い方',
        href: '/',
      },
      {
        title: 'よくある質問',
        href: '/',
      },
    ],
    moreHref: '/',
  },
  {
    title: '申請',
    titleHref: zendeskUrl.workFlows(),
    Icon: SmartHRShinseiIcon,
    links: [
      {
        title: '使い方',
        href: '/',
      },
      {
        title: '申請一覧画面の操作',
        href: '/',
      },
      {
        title: '申請フォームの作成・管理',
        href: '/',
      },
    ],
    moreHref: '/',
  },
  {
    title: 'ファイル一括アップロード',
    titleHref: zendeskUrl.fileUploader(),
    Icon: SmartHRFileuploadIcon,
    links: [
      {
        title: '使い方',
        href: '/',
      },
    ],
    moreHref: '/',
  },
  {
    title: 'カスタム社員名簿',
    titleHref: zendeskUrl.customMeibo(),
    Icon: SmartHRSyainmeiboIcon,
    links: [
      {
        title: '使い方',
        href: '/',
      },
      {
        title: 'よくある質問',
        href: '/',
      },
    ],
    moreHref: '/',
  },
  {
    title: '組織図',
    titleHref: zendeskUrl.soshikizu(),
    Icon: SmartHRSoshikizuIcon,
    links: [
      {
        title: '組織図の作成・閲覧',
        href: '/',
      },
      {
        title: '組織図の設定',
        href: '/',
      },
      {
        title: '組織図の操作',
        href: '/',
      },
    ],
    moreHref: '/',
  },
  {
    title: '年末調整',
    titleHref: zendeskUrl.nencho(),
    Icon: SmartHRNenmatsuchouseiIcon,
    links: [
      {
        title: 'はじめに',
        href: '/',
      },
      {
        title: '所得金額調整控除にまつわる注意点',
        href: '/',
      },
      {
        title: '住宅ローン控除にまつわる注意点',
        href: '/',
      },
    ],
    moreHref: '/',
  },
  {
    title: '各種サービス連携',
    titleHref: zendeskUrl.appIntegration(),
    Icon: SmartHRConnectIcon,
    links: [
      {
        title: '連携機能全般',
        href: '/',
      },
      {
        title: '店舗管理者向けiPadアプリ',
        href: '/',
      },
      {
        title: 'API連携',
        href: '/',
      },
    ],
    moreHref: '/',
  },
] as const

export const ADDON_LIST = [
  {
    title: 'SAML／SSO認証',
    titleHref: zendeskUrl.samlSsoAuthentication(),
    Icon: FaKeyIcon,
    links: [
      {
        title: '使い方',
        href: '/',
      },
      {
        title: 'よくある質問',
        href: '/',
      },
    ],
    moreHref: '/',
  },
  {
    title: '文書配付',
    titleHref: zendeskUrl.keiyaku(),
    Icon: SmartHRBunsyohaihuIcon,
    links: [
      {
        title: '基本的な使い方',
        href: '/',
      },
      {
        title: '書類テンプレートの編集',
        href: '/',
      },
      {
        title: 'CSV挿入用テンプレート変数を使う',
        href: '/',
      },
    ],
    moreHref: '/',
  },
  {
    title: '分析レポート',
    titleHref: zendeskUrl.report(),
    Icon: SmartHRBunsekireportIcon,
    links: [
      {
        title: 'はじめに',
        href: '/',
      },
      {
        title: 'プリセットレポート作成',
        href: '/',
      },
      {
        title: 'データセット作成',
        href: '/',
      },
    ],
    moreHref: '/',
  },
  {
    title: '従業員サーベイ',
    titleHref: zendeskUrl.survey(),
    Icon: SmartHRJugyouinsurveyIcon,
    links: [
      {
        title: 'はじめて従業員サーベイを使う',
        href: '/',
      },
      {
        title: 'サーベイを作成する',
        href: '/',
      },
      {
        title: '結果を確認する',
        href: '/',
      },
    ],
    moreHref: '/',
  },
  {
    title: '人事評価',
    titleHref: zendeskUrl.evaluation(),
    Icon: SmartHRJinjihyoukaIcon,
    links: [
      {
        title: 'はじめて人事評価を使う',
        href: '/',
      },
      {
        title: '評価シートを準備する',
        href: '/',
      },
      {
        title: '評価プロジェクトを準備する',
        href: '/',
      },
    ],
    moreHref: '/',
  },
  {
    title: '通勤経路検索',
    titleHref: zendeskUrl.route(),
    Icon: SmartHRTsuukinkeirokensakuIcon,
    links: [
      {
        title: '使い方',
        href: '/',
      },
      {
        title: 'よくある質問',
        href: '/',
      },
    ],
    moreHref: '/',
  },
] as const

export const OTHERS_LIST = [
  {
    title: 'セキュリティ',
    titleHref: zendeskUrl.security(),
    Icon: SmartHRSecurityIcon,
    links: [
      {
        title: 'アカウントロック',
        href: '/',
      },
      {
        title: '2段階認証',
        href: '/',
      },
      {
        title: '自動ログアウト設定',
        href: '/',
      },
    ],
    moreHref: '/',
  },
  {
    title: '料金と契約内容',
    titleHref: zendeskUrl.plan(),
    Icon: SmartHRYenIcon,
    links: [
      {
        title: '確認・変更',
        href: '/',
      },
      {
        title: '料金プラン',
        href: '/',
      },
    ],
    moreHref: '/',
  },
  {
    title: 'SmartHR API',
    titleHref: zendeskUrl.api(),
    Icon: SmartHRApirenkeiIcon,
    links: [
      {
        title: 'SmartHR API 仕様書について',
        href: '/',
      },
      {
        title: 'よくある質問',
        href: '/',
      },
    ],
    moreHref: '/',
  },
] as const

export const RELATED_LINK_LIST = [
  {
    title: 'リリースノート',
    description: '機能アップデートや改善をチェックしたい',
    href: internalPath.releaseNotesTop(),
  },
  {
    title: 'SmartHRスクール',
    description: '設定の流れや機能の全体像を把握したい',
    href: externalUrl.school(),
  },
  {
    title: 'SmartHR Mag.',
    description: '人事労務のホットな情報をキャッチしたい',
    href: externalUrl.mag(),
  },
  {
    title: 'SmartHR ガイド',
    description: 'SmartHRの活用や関連情報を知りたい',
    href: externalUrl.guide(),
  },
] as const
