import { Label } from './api/label'

const labelRe: { [key: string]: string[] } = {
  新機能: ['✨\\s*新機能'],
  改善: ['(?:⚡️|💬|📈|🚸|\\s)+(?:改善|カイゼン)'],
  不具合修正: ['(?:👨‍|⚕️|🐛|\\s)+(?:不具合|不具合修正)'],
  アクセシビリティ: ['(?:🎢|♿️|\\s)+(?:アクセシビリティ)'],
  廃止した機能: ['👋\\s*廃止した機能'],
}

export const detectLabelsFromMarkdown = (content: string): Label[] => {
  const labels = new Set<Label>()
  const titles = content.split('\n').filter((line) => line.startsWith('#'))

  Object.keys(labelRe).forEach((label) => {
    const regexps = labelRe[label]

    regexps.forEach((regexpStr) => {
      const regexp = new RegExp(`^#\\s*${regexpStr}\\s*$`)

      if (titles.some((title) => regexp.test(title))) {
        labels.add(label as Label)
      }
    })
  })

  return [...labels]
}
