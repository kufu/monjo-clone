import { h } from 'hastscript'
import type { Root } from 'mdast'
import remarkDirective from 'remark-directive'
import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

const remarkDirectivePlugin: Plugin<void[], string, Root> = () => {
  return (tree: Root) => {
    visit(tree, (node) => {
      if (node.type === 'textDirective' || node.type === 'leafDirective' || node.type === 'containerDirective') {
        const data = node.data || (node.data = {})
        const hast = h('div', { className: node.name, ...node.attributes })

        data.hName = hast.tagName
        data.hProperties = hast.properties
      }
    })
  }
}

const remarkHeadingTablePlugin: Plugin<void[], string, Root> = () => {
  return (tree: Root) => {
    const headingList: string[] = []
    let firstH1Found = false
    visit(tree, 'heading', (node) => {
      // 目次を表示するために、記事の一番最初の見出しにclassを付与
      if (node.depth === 1 && !firstH1Found) {
        firstH1Found = true

        const data = node.data || (node.data = {})
        data.hProperties = { className: 'firstHeading' }
      }

      // 目次からのリンクのためのidを付与
      if ([1, 2, 3].includes(node.depth)) {
        node.children.forEach((item) => {
          if (item.type === 'text') {
            const headingText = item.value.replace(/\s+/g, '')

            const duplicateCount = headingList.filter((i) => i === headingText).length
            headingList.push(headingText)

            const headingId = duplicateCount === 0 ? headingText : `${headingText}${duplicateCount}`
            const data = node.data || (node.data = {})
            data.hProperties = Object.assign({}, data.hProperties, { id: headingId })
          }
        })
      }

      // Markdown内のトップレベルの見出しをh2にするために、全ての見出しを1段階下げる
      node.depth++
    })
  }
}

// TODO: '**'や'_'の直前語に約物がある場合も適切にparseできるようなpluginを書きたい
// 例：
//   Markdown: もうひといきじゃパワーを**［メテオ］**に！
//   現状動作（HTML）: もうひといきじゃパワーを**［メテオ］**に！
//   期待動作（HTML）: もうひといきじゃパワーを<strong>［メテオ］</strong>に！
export const remarkPlugins = [
  remarkUnwrapImages, // ![xxx](...) のタグが<p></p>で囲われるのを防ぐ
  remarkHeadingTablePlugin,
  remarkDirective,
  remarkDirectivePlugin,
  remarkGfm,
]
