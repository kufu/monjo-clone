// REVIEW: もっといい方法があれば変更したい

import { isInteger } from './isInteger'

// 各数値のファイル名・ディレクトリ名は `00_ja.md`, `01_ja.md` と連番になるため、数値を2桁の数値文字列にフォーマットする
export const formatIndex = (index: number | string): string => {
  if (isInteger(index)) {
    return index.toString().padStart(2, '0')
  } else {
    return index
  }
}
