import { convertSectionToDirectories, extractSectionHierarchy, getAllSections, getSectionById } from '../section'

describe('getSectionById()', () => {
  describe('存在する値を渡した場合', () => {
    it('Sectionを返す', async () => {
      const section = await getSectionById('360002173514')

      expect(section.id).toEqual('360002173514')
      expect(section.locales['ja']).toEqual('使い方ガイド')
    })
  })

  describe('存在しない値を渡した場合', () => {
    it('例外を発生させる', () => {
      return expect(getSectionById('unknown')).rejects.toThrow(`Couldn't find Section with id = unknown`)
    })
  })
})

describe('getAllSections()', () => {
  describe('引数が存在しない場合', () => {
    it('すべてのリリースノートを取得する', async () => {
      const sections = await getAllSections()
      expect(sections.length).toBeGreaterThan(0)
    })
  })
})

describe('extractSectionHierarchy()', () => {
  it('セクション階層の一覧を返す', async () => {
    const section = await getSectionById('360004481433')

    const expected = [
      await getSectionById('360002173514'),
      await getSectionById('360005217334'),
      await getSectionById('360004481433'),
    ]

    expect(await extractSectionHierarchy(section)).toEqual(expected)
  })
})

describe('convertSectionToDirectories()', () => {
  describe('positionが0のIDを渡す', () => {
    it('ディレクトリのパスを返す', async () => {
      const section = await getSectionById('360004481433')
      expect(await convertSectionToDirectories(section)).toEqual(['00_使い方ガイド', '00_管理者向け使い方ガイド', '00_使い方'])
    })
  })

  describe('positionが0ではないIDを渡す', () => {
    it('ディレクトリのパスを返す', async () => {
      const section = await getSectionById('1500000381362')
      expect(await convertSectionToDirectories(section)).toEqual(['04_リリースノート', '08_SmartHR APIのリリースノート'])
    })
  })
})
