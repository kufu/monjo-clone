import fs from 'fs'
import path from 'path'

// ディレクトリがプロジェクトルートであることを確認する
export const assertRootDir = (dir: string): void => {
  const publicDir = path.join(dir, 'public')
  const contentDir = path.join(dir, 'content')

  if (!fs.existsSync(publicDir) || !fs.existsSync(contentDir)) {
    throw new Error('rootディレクトリで実行してください')
  }
}
