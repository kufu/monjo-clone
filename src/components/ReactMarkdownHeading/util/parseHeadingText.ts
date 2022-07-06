import extractText from './extractText'
import { HeadingWithId } from './parseHeadingAST'

export interface Heading extends HeadingWithId {
  text: string
  href: string
  duplicateCount: number
}

const parseHeadingText = (headingList: HeadingWithId[], blankSpaceReplaceText = '-', hyperlinkPrefix = ''): Heading[] => {
  const parsedHeadingList: Heading[] = []

  headingList.forEach((item) => {
    const { text, href } = extractText(item.children, blankSpaceReplaceText, hyperlinkPrefix)
    const duplicateCount = parsedHeadingList.filter((i) => i.href === href).length

    parsedHeadingList.push({ ...item, text, href, duplicateCount })
  })

  parsedHeadingList.forEach((item) => {
    const { href, duplicateCount } = item
    item.href = href + (duplicateCount ? `${blankSpaceReplaceText}${duplicateCount}` : '')
  })

  return parsedHeadingList
}

export default parseHeadingText
