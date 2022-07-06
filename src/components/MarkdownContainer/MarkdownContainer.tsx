import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

import { zendeskArticleMarkupStyle, zendeskArticleStyle, zendeskArticleToCStyle, zendeskBaseStyle } from '@/styles/zendeskStyle'

import { buildMarkdownComponents } from './buildComponents'
import { remarkPlugins } from './buildRemarkPlugins'

type Props = {
  markdown: string
  articleId: string
  buildTableOfContents?: boolean
}

export const MarkdownContainer: React.VFC<Props> = ({ markdown, articleId, buildTableOfContents = false }) => {
  return (
    <StyledReactMarkdown
      remarkPlugins={remarkPlugins}
      components={buildMarkdownComponents(articleId, markdown, buildTableOfContents)}
    >
      {markdown}
    </StyledReactMarkdown>
  )
}

const StyledReactMarkdown = styled(ReactMarkdown)`
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    white-space: pre-wrap;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  ${zendeskBaseStyle};
  ${zendeskArticleStyle};
  ${zendeskArticleMarkupStyle};
  ${zendeskArticleToCStyle};
`
