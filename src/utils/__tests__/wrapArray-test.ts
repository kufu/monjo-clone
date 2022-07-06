import { wrapArray } from '../wrapArray'

describe('wrapArray()', () => {
  it('配列以外の値を渡すと配列になって返ってくる', () => {
    expect(wrapArray(1)).toEqual([1])
  })

  it('配列の値を渡すとそのまま返ってくる', () => {
    expect(wrapArray([1])).toEqual([1])
  })
})
