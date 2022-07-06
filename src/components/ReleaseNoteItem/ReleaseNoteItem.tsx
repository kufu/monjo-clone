import Link from 'next/link'
import styled from 'styled-components'

import { Cluster, FaAngleRightIcon, LineUp, Stack, Text } from '@/components/ui'
import { internalPath, NEGATIVE_LABELS } from '@/constants'
import { color, spacing } from '@/styles/theme'
import type { ArticleHeader, Locale, Product } from '@/utils/api'

import { Label } from '../Label'

type Props = {
  locale: Locale
  product: Product
  articleHeader: ArticleHeader
}

export const ReleaseNoteItem: React.VFC<Props> = ({ locale, product, articleHeader }) => {
  return (
    <Wrapper gap={0.75}>
      <Link passHref href={internalPath.releaseNote(product, articleHeader.date!, articleHeader.id)}>
        <Anchor>
          <Text>{articleHeader.titleLocales[locale]}</Text>
          <AngleRightIcon aria-label="詳細" />
        </Anchor>
      </Link>

      <LineUp vAlign="center" gap="XS">
        <Cluster align="center" gap="XXS">
          {articleHeader.labels.map((label) => (
            <Label key={label} label={label} positive={!NEGATIVE_LABELS.includes(label)} />
          ))}
        </Cluster>
      </LineUp>
    </Wrapper>
  )
}

const Wrapper = styled(Stack)`
  padding-bottom: ${spacing.XS};
  border: dashed ${color.BORDER};
  border-width: 0 0 1px;
`

const Anchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    text-decoration: underline;
  }
`

const AngleRightIcon = styled(FaAngleRightIcon)`
  min-width: 11px;
  height: 18px;
  margin-left: 12px;
  color: ${color.TEXT_LINK};
`
