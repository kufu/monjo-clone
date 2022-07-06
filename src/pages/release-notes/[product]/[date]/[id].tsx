import { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'node:querystring'
import styled from 'styled-components'

import { Breadcrumb } from '@/components/Breadcrumb'
import { Layout } from '@/components/layouts/Layout'
import { MarkdownContainer } from '@/components/MarkdownContainer'
import { PageHeading } from '@/components/PageHeading'
import { Stack } from '@/components/ui'
import { WithSidebar } from '@/components/WithSidebar'
import { internalPath, META_DESCRIPTION, PRODUCT_DISPLAY_NAMES, PRODUCT_ICONS } from '@/constants'
import { useArticleLiveUpdate } from '@/hooks'
import { fontSize, leading, spacing } from '@/styles/theme'
import { defaultLocale, getArticleById, getArticlesBySectionId, Product, productIdMap, products } from '@/utils/api'

type Props = InferGetStaticPropsType<typeof getStaticProps>
type Params = ParsedUrlQuery & {
  product: Product
  date: string
  id: string
}

export const getStaticPaths = async () => {
  const paths: GetStaticPathsResult['paths'] = []

  for (const product of products) {
    const sectionId = productIdMap[product]
    const articles = await getArticlesBySectionId(sectionId)

    articles.forEach((article) => {
      Object.keys(article.titleLocales).forEach((locale) => {
        paths.push({
          params: {
            product,
            date: article.date,
            id: article.id,
          },
          locale,
        })
      })
    })
  }

  return {
    fallback: false,
    paths,
  }
}

export const getStaticProps = async (context: GetStaticPropsContext<Params>) => {
  let { locale } = context
  locale ||= defaultLocale

  const { product, id } = context.params!
  const article = await getArticleById(id)

  return {
    props: {
      product,
      id,
      title: article.titleLocales[locale],
      body: article.bodyLocales[locale],
      locale,
    },
    revalidate: 10,
  }
}

const ReleaseNotePage: NextPage<Props> = ({ id, product, title, body, locale }) => {
  const productName = PRODUCT_DISPLAY_NAMES[product]
  const { liveTitle, liveBody } = useArticleLiveUpdate(id, title, body, locale)

  return (
    <Layout>
      <Head>
        <title>{`${liveTitle}｜ヘルプセンター｜SmartHR`}</title>
        <meta name="twitter:description" content={META_DESCRIPTION.releaseNote} />
        <meta name="twitter:title" content={`${title}｜ヘルプセンター｜SmartHR`} />
        <meta name="description" content={META_DESCRIPTION.releaseNote} />
      </Head>

      <PageHeading title={`${productName}のリリースノート`} Icon={PRODUCT_ICONS[product]} withoutHeadingTag />

      <Center align="center" gap="XXL">
        <Breadcrumb
          higherPages={[
            {
              title: 'リリースノート',
              href: internalPath.releaseNotesTop(),
            },
            {
              title: `${productName}のリリースノート`,
              href: internalPath.releaseNotesForProductByPage(product, 1),
            },
          ]}
          // NOTE: 記事タイトルが非常に長くなってしまうので表示を省略する
          currentPageTitle={liveTitle}
          currentPageVisibility={false}
        />

        <WithSidebar>
          <Article>
            <ArticleHeading>{liveTitle}</ArticleHeading>
            <MarkdownContainer markdown={liveBody} articleId={id} />
          </Article>
        </WithSidebar>
      </Center>
    </Layout>
  )
}

export default ReleaseNotePage

const Center = styled(Stack)`
  padding: 0 ${spacing.XS};
`

const Article = styled.article`
  width: 100%;
  max-width: 700px;
`

const ArticleHeading = styled.h1`
  padding-bottom: ${spacing.XS};
  margin-bottom: ${spacing.MONJO_ML};
  font-size: ${fontSize.MONJO_XXL};
  font-weight: bold;
  line-height: ${leading.TIGHT};
  border-width: 0 0 1px;
`
