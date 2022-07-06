export const wrapArray = <T>(obj: T | T[]): T[] => {
  if (Array.isArray(obj)) {
    return obj
  } else {
    return [obj]
  }
}
