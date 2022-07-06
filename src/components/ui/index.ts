// smarthr-uiの各種コンポーネントは直接importせずに、この ui/index.ts を通してimportするようにする。
// このレイヤーを1枚挟むことで、smarthr-uiのBREAKING CHANGESを一時的に吸収したり、暫定的にスタイルをあてるなどの対処ができる。
// とはいえ、純粋にsmarthr-uiのコンポーネントをバケツリレーするだけで済むのが理想。

export type { ComponentProps as IconComponentProps } from 'smarthr-ui'
export {
  Cluster,
  FaAngleRightIcon,
  FaBookOpenIcon,
  FaExclamationCircleIcon,
  FaFileIcon,
  FaKeyIcon,
  FaLinkIcon,
  FaListIcon,
  FaRegLightbulbIcon,
  FaTaxiIcon,
  Heading,
  Input,
  LineUp,
  Pagination,
  Select,
  Sidebar,
  Stack,
  Text,
  TextLink,
} from 'smarthr-ui'

// NOTE: ゆくゆくはsmarthr-uiに導入予定のアイコンなので、
// 後々置き換えやすいようにsvgファイル含めてこのレイヤーに集約している
export {
  SmartHRApirenkeiIcon,
  SmartHRBeginnerMarkIcon,
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
} from './SmartHRIcons'
