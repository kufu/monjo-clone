import Link from 'next/link'
import path from 'path'
import { Options } from 'react-markdown'
import styled from 'styled-components'

import { DirectiveContainer } from '@/components/DirectiveContainer'
import { ReactMarkdownHeading } from '@/components/ReactMarkdownHeading'
import { FaLinkIcon, FaListIcon, TextLink } from '@/components/ui'
import { UtsuwaTrial } from '@/components/UtsuwaTrial'
import { DEV_HOST, ZENDESK_HOST } from '@/constants'
import { color, fontSize, interaction, radius, spacing, VISUALLY_HIDDEN_STYLE } from '@/styles/theme'

const isAbsolutePath = (src: string | undefined): boolean => {
  if (!src) {
    return false
  }

  if (src.startsWith('https://') || src.startsWith('http://') || src.startsWith('//')) {
    return true
  }

  return false
}

const isInternalLink = (src: string | undefined): boolean => {
  // NOTE: hrefが未指定・空文字の場合もinternalとして処理する
  if (!src || !isAbsolutePath(src)) {
    return true
  }

  try {
    const url = new URL(src)

    // NOTE: ヘルプサイトは別ドメインのサーバーに置かれるが、
    // ユーザー体験としては同一サイトとして振る舞うのが自然なので例外として扱っている
    return url.host === (process.env.VERCEL_URL ?? DEV_HOST) || url.host === ZENDESK_HOST
  } catch (e) {
    // NOTE: URLをtypoしたりすると例外になるので念の為キャッチしておく
    console.error(e)
    return true
  }
}

// 現在の記事IDを元に、記載されている画像の絶対パスを求める
// なお、ここで求められたパスは、public配下の画像パスと一致することが期待される
const resolveImageSource = (articleId: string, src: string): string => {
  return path.join('/articles', articleId, src)
}

export const buildMarkdownComponents = (
  articleId: string,
  markdown: string,
  buildTableOfContents: boolean,
): Options['components'] => {
  return {
    // divは `src/components/MarkdownContainer/buildComponents.tsx` の `remarkDirectivePlugin` にて生成される
    div: (node) => {
      switch (node.className) {
        case 'related':
        case 'alert':
        case 'dictionary':
        case 'tips': {
          // Implemented component for remark-directive
          return <DirectiveContainer type={node.className}>{node.children}</DirectiveContainer>
        }
        case 'trial_utsuwa': {
          // Implemented component for remark-directive
          return <UtsuwaTrial />
        }
        default: {
          // Not implemented yet
          throw new Error(`not implemented directive detected ${node.className}. ${articleId}`)
        }
      }
    },
    img: (image) => {
      let src: string

      if (isAbsolutePath(image.src)) {
        src = image.src!
      } else {
        src = resolveImageSource(articleId, image.src!)
      }

      // NOTE: next/imageを利用するとパフォーマンス最適化可能だが、
      // 画像そのもののサイズ（width, height）で表示できないため、素朴にimg要素を利用している。
      // eslint-disable-next-line @next/next/no-img-element
      return (
        <a href={src} target="_blank" rel="noopener noreferrer">
          <Image src={src} alt={image.alt} />
          <VisuallyHiddenText>画像を表示する</VisuallyHiddenText>
        </a>
      )
    },
    h2: (h2) => {
      return (
        <>
          {buildTableOfContents && h2.className === 'firstHeading' && (
            <TableOfContents>
              <Heading>
                <IconWrapper>
                  <FaListIcon color={color.BRAND} size={14} />
                </IconWrapper>
                目次
              </Heading>
              <Body>
                <ReactMarkdownHeading
                  markdown={markdown}
                  headingDepth={3}
                  blankSpaceReplaceText={''}
                  hyperlink
                  ulClassName="headingList"
                />
              </Body>
            </TableOfContents>
          )}
          <h2 id={h2.id}>{h2.children}</h2>
        </>
      )
    },
    a: (a) =>
      isInternalLink(a.href) ? (
        <Link passHref href={a.href ?? ''}>
          <StyledTextLink suffix={<FaLinkIcon />} href={a.href}>
            {a.children}
          </StyledTextLink>
        </Link>
      ) : (
        <StyledTextLink href={a.href} target="_blank" rel="noopener noreferrer">
          {a.children}
        </StyledTextLink>
      ),
  }
}

const Image = styled.img`
  max-width: 100%;
`

const VisuallyHiddenText = styled.span`
  ${VISUALLY_HIDDEN_STYLE}
`

const StyledTextLink = styled(TextLink)`
  &:focus,
  &:hover {
    opacity: ${interaction.hover.feedbackOpacity};
  }
`

const TableOfContents = styled.div`
  padding: ${spacing.MONJO_XS};
  border: solid 1px ${color.BRAND};
  border-radius: ${radius.monjo_l};
`
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${spacing.MONJO_XS};
`
const Heading = styled.div`
  display: flex;
  margin: 0 0 ${spacing.MONJO_XS} 0;
  font-size: ${fontSize.L};
  font-weight: bold;
`
const Body = styled.div`
  margin-left: ${spacing.MONJO_XXS};
  .headingList {
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    color: ${color.TEXT_LINK};
    list-style: disc;
  }
`
