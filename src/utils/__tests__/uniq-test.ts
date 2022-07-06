import { uniq } from '../uniq'

describe('uniq()', () => {
  it('uniqされた値を返す。順番は先頭の値を優先する', () => {
    const a = [1, 10, 2, 4, -1, 1, 2, 10]
    expect(uniq(a)).toEqual([1, 10, 2, 4, -1])
  })
})
