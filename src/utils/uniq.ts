// 配列の要素をuniqにする
// https://medium.com/@jakubsynowiec/unique-array-values-in-javascript-7c932682766c のパクリ
export const uniq = <T>(array: T[]): T[] => {
  const length = array.length
  const seen = new Set<T>()
  const result: T[] = [] // seenをsplatするより、配列を直接返すほうが高速らしい

  for (let index = 0; index < length; index++) {
    const value = array[index]

    if (!seen.has(value)) {
      result.push(value)
      seen.add(value)
    }
  }

  return result
}
