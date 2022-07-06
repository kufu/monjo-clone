import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import { Breadcrumb } from '@/components/Breadcrumb'
import { Layout } from '@/components/layouts/Layout'
import { PageHeading } from '@/components/PageHeading'
import { ProductReleaseNote } from '@/components/ProductReleaseNote'
import { FaFileIcon, Stack } from '@/components/ui'
import { WithSidebar } from '@/components/WithSidebar'
import { MAX_ITEMS_PER_PRODUCT, META_DESCRIPTION, PRODUCT_DISPLAY_NAMES } from '@/constants'
import { spacing } from '@/styles/theme'
import { getArticlesBySectionId, hiddenProducts, productIdMap, products, sortKeyDesc } from '@/utils/api'
import { pick } from '@/utils/pick'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { locale } = context

  const sectionContexts = await Promise.all(
    products
      .filter((product) => !hiddenProducts.includes(product))
      .map(async (product) => {
        const sectionId = productIdMap[product]
        const articles = (await getArticlesBySectionId(sectionId)).sort(sortKeyDesc)
        const articleHeaders = articles
          .slice(0, MAX_ITEMS_PER_PRODUCT)
          .map((article) => pick(article, 'id', 'date', 'labels', 'sortKey', 'sectionId', 'titleLocales', 'directory'))

        return {
          product,
          productName: PRODUCT_DISPLAY_NAMES[product],
          articleHeaders,
          totalCount: articles.length,
        }
      }),
  )

  return {
    props: {
      locale: locale!,
      sectionContexts,
    },
    revalidate: 10,
  }
}

const Index: NextPage<Props> = ({ locale, sectionContexts }) => {
  const title = 'リリースノート'

  return (
    <Layout>
      <Head>
        <title>{`${title}｜ヘルプセンター｜SmartHR`}</title>
        <meta name="twitter:description" content={META_DESCRIPTION.releaseNote} />
        <meta name="twitter:title" content={`${title}｜ヘルプセンター｜SmartHR`} />
        <meta name="description" content={META_DESCRIPTION.releaseNote} />
      </Head>

      <PageHeading title={title} Icon={FaFileIcon} />

      <Center align="center" gap="XXL">
        <Breadcrumb currentPageTitle={title} />

        <WithSidebar>
          <Stack as="span" gap="XXL">
            {sectionContexts.map((context) => (
              <ProductReleaseNote key={context.product} locale={locale} context={context} />
            ))}
          </Stack>
        </WithSidebar>
      </Center>
    </Layout>
  )
}

export default Index

const Center = styled(Stack)`
  padding: 0 ${spacing.XS};
`
