import Link from 'next/link'
import styled from 'styled-components'

import { ReleaseNoteItem } from '@/components/ReleaseNoteItem'
import { Stack } from '@/components/ui'
import { internalPath, MAX_ITEMS_PER_PRODUCT } from '@/constants'
import { color, fontSize, interaction, spacing } from '@/styles/theme'
import { ArticleHeader, Locale, Product } from '@/utils/api'

type Props = {
  locale: Locale
  context: {
    product: Product
    productName: string
    articleHeaders: ArticleHeader[]
    totalCount: number
  }
}

export const ProductReleaseNote: React.VFC<Props> = ({ locale, context }) => {
  const title = `${context.productName}のリリースノート`

  return (
    <Section>
      <SectionHeading>{title}</SectionHeading>
      <Stack as="ul" gap="S">
        {context.articleHeaders.map((articleHeader, i) => (
          <li key={i}>
            <ReleaseNoteItem product={context.product} locale={locale} articleHeader={articleHeader} />
          </li>
        ))}
      </Stack>
      {context.totalCount > MAX_ITEMS_PER_PRODUCT && (
        <Link passHref href={internalPath.releaseNotesForProductByPage(context.product, 1)}>
          <Anchor>{`${title}をすべて見る`}</Anchor>
        </Link>
      )}
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  max-width: 700px;
`

const SectionHeading = styled.h2`
  padding-bottom: ${spacing.XS};
  margin-bottom: ${spacing.MONJO_ML};
  font-size: ${fontSize.MONJO_XXL};
  font-weight: bold;
  border: solid ${color.BORDER};
  border-width: 0 0 1px;
`

const Anchor = styled.a`
  display: block;

  margin-top: ${spacing.S};
  color: ${color.TEXT_LINK};
  text-align: right;
  text-decoration: underline;

  &:focus,
  &:hover {
    text-decoration: underline;
    opacity: ${interaction.hover.feedbackOpacity};
  }
`
