import { detectLabelsFromMarkdown } from '../detectLabelsFromMarkdown'

describe('detectLabelsFromMarkdown()', () => {
  it('新機能を検知する', () => {
    expect(detectLabelsFromMarkdown('# ✨ 新機能')).toEqual(['新機能'])
  })

  it('新機能を検知する', () => {
    expect(detectLabelsFromMarkdown('# ✨ 新機能')).toEqual(['新機能'])
  })

  it('改善を検知する', () => {
    expect(detectLabelsFromMarkdown('# 📈 改善')).toEqual(['改善'])
  })

  it('改善を検知する', () => {
    expect(detectLabelsFromMarkdown('# 📈 カイゼン')).toEqual(['改善'])
  })

  it('改善を検知する', () => {
    expect(detectLabelsFromMarkdown('# 🚸カイゼン')).toEqual(['改善'])
  })

  it('改善を検知する', () => {
    expect(detectLabelsFromMarkdown('# 🚸💬カイゼン')).toEqual(['改善'])
  })

  it('改善を検知する', () => {
    expect(detectLabelsFromMarkdown('# 🚸💬改善')).toEqual(['改善'])
  })

  it('改善を検知する', () => {
    expect(detectLabelsFromMarkdown('# ⚡️🚸💬改善')).toEqual(['改善'])
  })

  it('改善を検知する', () => {
    expect(detectLabelsFromMarkdown('# ⚡️🚸改善')).toEqual(['改善'])
  })

  it('改善を検知する', () => {
    expect(detectLabelsFromMarkdown('# ⚡️💬改善')).toEqual(['改善'])
  })

  it('改善を検知する', () => {
    expect(detectLabelsFromMarkdown('# ⚡️改善')).toEqual(['改善'])
  })

  it('改善を検知する', () => {
    expect(detectLabelsFromMarkdown('# 🚸改善')).toEqual(['改善'])
  })

  it('改善を検知する', () => {
    expect(detectLabelsFromMarkdown('# 💬改善')).toEqual(['改善'])
  })

  it('不具合修正を検知する', () => {
    expect(detectLabelsFromMarkdown('# 👨‍⚕️ 不具合修正')).toEqual(['不具合修正'])
  })

  it('不具合修正を検知する', () => {
    expect(detectLabelsFromMarkdown('# 不具合修正')).toEqual(['不具合修正'])
  })

  it('不具合修正を検知する', () => {
    expect(detectLabelsFromMarkdown('# 🐛不具合修正')).toEqual(['不具合修正'])
  })

  it('不具合修正を検知する', () => {
    expect(detectLabelsFromMarkdown('# 👨‍⚕️不具合修正')).toEqual(['不具合修正'])
  })

  it('不具合修正を検知する', () => {
    expect(detectLabelsFromMarkdown('# 👨‍⚕️ 不具合')).toEqual(['不具合修正'])
  })

  it('不具合修正を検知する', () => {
    expect(detectLabelsFromMarkdown('# 👨‍⚕️ 不具合修正')).toEqual(['不具合修正'])
  })

  it('アクセシビリティを検知する', () => {
    expect(detectLabelsFromMarkdown('# 🎢 アクセシビリティ')).toEqual(['アクセシビリティ'])
  })

  it('アクセシビリティを検知する', () => {
    expect(detectLabelsFromMarkdown('# 🎢 アクセシビリティ')).toEqual(['アクセシビリティ'])
  })

  it('アクセシビリティを検知する', () => {
    expect(detectLabelsFromMarkdown('# ♿️アクセシビリティ')).toEqual(['アクセシビリティ'])
  })

  it('廃止した機能を検知する', () => {
    expect(detectLabelsFromMarkdown('# 👋廃止した機能')).toEqual(['廃止した機能'])
  })
})
