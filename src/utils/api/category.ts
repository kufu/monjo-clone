import { Locale } from './locale'

// Zendeskに格納されているカテゴリーのうち、一部の要素をmonjoに移行する
// https://github.com/kufu/moving-from-zendesk/blob/main/src/zendesk.d.ts のCategoryResponseが含む値の一部
export type Category = {
  id: number
  position: number
  name: string
  translations: Array<{
    locale: Locale
    title: string
  }>
}

// カテゴリーは件数が少ないので直書きする
const categories: Readonly<Category[]> = [
  {
    id: 360002173514,
    position: 0,
    name: '使い方ガイド',
    translations: [
      {
        locale: 'en-us',
        title: 'How to use guide',
      },
      {
        locale: 'ja',
        title: '使い方ガイド',
      },
      {
        locale: 'ko',
        title: 'SmartHR 고객센터',
      },
      {
        locale: 'ko-kr',
        title: 'SmartHR 고객센터',
      },
      {
        locale: 'vi',
        title: 'Hướng dẫn sử dụng',
      },
      {
        locale: 'zh-cn',
        title: '如何使用指南',
      },
      {
        locale: 'zh-tw',
        title: '如何使用指南',
      },
    ],
  },
  {
    id: 360002173554,
    position: 1,
    name: '機能で調べる',
    translations: [
      {
        locale: 'en-us',
        title: 'Find out by Features',
      },
      {
        locale: 'ja',
        title: '機能で調べる',
      },
      {
        locale: 'ko',
        title: '기능에서 찾기',
      },
      {
        locale: 'ko-kr',
        title: '기능에서 찾기',
      },
      {
        locale: 'vi',
        title: 'Tìm hiểu theo chức năng',
      },
      {
        locale: 'zh-cn',
        title: '按功能查找',
      },
      {
        locale: 'zh-tw',
        title: '按功能查找',
      },
    ],
  },
  {
    id: 360002173574,
    position: 3,
    name: 'その他',
    translations: [
      {
        locale: 'en-us',
        title: 'Others',
      },
      {
        locale: 'ja',
        title: 'その他',
      },
      {
        locale: 'ko',
        title: '기타',
      },
      {
        locale: 'ko-kr',
        title: '기타',
      },
      {
        locale: 'vi',
        title: 'khác',
      },
      {
        locale: 'zh-cn',
        title: '其他',
      },
      {
        locale: 'zh-tw',
        title: '其他',
      },
    ],
  },
  {
    id: 360002188713,
    position: 2,
    name: '有料オプション',
    translations: [
      {
        locale: 'en-us',
        title: 'Paid options',
      },
      {
        locale: 'ja',
        title: '有料オプション',
      },
      {
        locale: 'ko',
        title: '유료 옵션',
      },
      {
        locale: 'ko-kr',
        title: '유료 옵션',
      },
      {
        locale: 'vi',
        title: 'tùy chọn trả tiền',
      },
      {
        locale: 'zh-cn',
        title: '付费选项',
      },
      {
        locale: 'zh-tw',
        title: '付費選項',
      },
    ],
  },
  {
    id: 360004438553,
    position: 4,
    name: 'リリースノート',
    translations: [
      {
        locale: 'ja',
        title: 'リリースノート',
      },
    ],
  },
]

// すべてのカテゴリーを返す
export const getAllCategories = (): Readonly<Category[]> => {
  return categories
}

// IDを元に単一のカテゴリーを返す
export const getCategoryById = (categoryId: number): Readonly<Category> => {
  const category = categories.find((c) => c.id === categoryId)

  if (!category) {
    throw new Error(`Couldn't find Category with id = ${categoryId}`)
  }

  return category
}
