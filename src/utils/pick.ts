export const pick = <T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> => {
  const ret: any = {}

  keys.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      ret[key] = obj[key]
    }
  })

  return ret
}
