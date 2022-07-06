import { Content } from 'mdast'
import { fromMarkdown } from 'mdast-util-from-markdown'

const markdownToAST = (markdown: string): Content[] => {
  return fromMarkdown(markdown).children
}

export default markdownToAST
