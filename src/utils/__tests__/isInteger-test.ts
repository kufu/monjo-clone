import { isInteger } from '../isInteger'

describe('isInteger()', () => {
  it('数値を渡すとtrue', () => {
    expect(isInteger(1)).toBe(true)
  })

  it('数値以外を渡すとfalse', () => {
    expect(isInteger('')).toBe(false)
  })
})
