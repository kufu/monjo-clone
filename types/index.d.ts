// NOTE: 一応設定しておくもののNext.js側の設定が勝ってしまうので反映されていない。（いつか動くようになるといいな）
// https://zenn.dev/catnose99/articles/49c12f84182bdf#%E6%9C%AC%E9%A1%8C%EF%BC%9A-import%E3%81%97%E3%81%9Fsvg%E3%81%8Cany%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%97%E3%81%BE%E3%81%86
declare module '*.svg' {
  const content: React.VFC<React.SVGProps<SVGAElement>>
  export default content
}

// NOTE: 本当は直したいけど諸事情で直せない場合のany用の型定義
// any指定が理想的なケースと区別するために定義しておく
export type FIXME_any = any
