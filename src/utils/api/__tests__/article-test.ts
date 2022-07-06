import { getAllArticles, getArticleById } from '../article'

describe.only('getAllArticles()', () => {
  describe('引数が存在しない場合', () => {
    it('すべてのリリースノートを取得する', async () => {
      const articles = await getAllArticles()
      expect(articles.length).toBeGreaterThan(0)
    }, 500000)
  })
})

describe('getArticleById()', () => {
  describe('存在する値を渡した場合', () => {
    it('Articleを返す', async () => {
      const id = '86b682fe-a61a-42d4-9ee2-0d7694cd4260'
      const article = await getArticleById(id)

      expect(article.id).toEqual(id)
      expect(article.titleLocales['ja']).toEqual('2020/08/28 プラン変更の導線の一部を変更しました')
    })
  })

  describe('存在しない値を渡した場合', () => {
    it('例外を発生させる', () => {
      expect(getArticleById('unknown')).rejects.toThrow(/記事が存在しません/)
    })
  })
})
