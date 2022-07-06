export const isString = (v: any): v is string => {
  return String(v) === v
}
