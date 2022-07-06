import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import styled from 'styled-components'

import { Breadcrumb } from '@/components/Breadcrumb'
import { Layout } from '@/components/layouts/Layout'
import { PageHeading } from '@/components/PageHeading'
import { ReleaseNoteItem } from '@/components/ReleaseNoteItem'
import { Pagination, Stack } from '@/components/ui'
import { WithSidebar } from '@/components/WithSidebar'
import { internalPath, MAX_ITEMS_PER_PAGE, META_DESCRIPTION, PRODUCT_DISPLAY_NAMES, PRODUCT_ICONS } from '@/constants'
import { useMedia } from '@/hooks'
import { spacing } from '@/styles/theme'
import { getArticlesBySectionId, locales, Product, productIdMap, products, sortKeyDesc } from '@/utils/api'
import { pick } from '@/utils/pick'

type Props = InferGetStaticPropsType<typeof getStaticProps>
type Params = ParsedUrlQuery & {
  product: Product
  page: string
}

export const getStaticPaths = async () => {
  const allParams = (
    await Promise.all(
      products.map(async (product) => {
        const sectionId = productIdMap[product]
        const totalCount = (await getArticlesBySectionId(sectionId)).length
        const totalPage = Math.ceil(totalCount / MAX_ITEMS_PER_PAGE)

        return [...Array(totalPage)].map((_, i) => ({
          product,
          page: `${i + 1}`,
        }))
      }),
    )
  ).flat()

  const paths = locales.map((locale) => allParams.map((params) => ({ params, locale }))).flat()

  return {
    fallback: false, // NOTE: 未定義pathは404にするのでfallbackさせない
    paths,
  }
}

export const getStaticProps = async (context: GetStaticPropsContext<Params>) => {
  const { locale } = context
  const { product, page } = context.params!

  const currentPage = Number(page)
  const sectionId = productIdMap[product]
  const releaseNoteArticles = (await getArticlesBySectionId(sectionId)).sort(sortKeyDesc)
  const totalPage = Math.ceil(releaseNoteArticles.length / MAX_ITEMS_PER_PAGE)

  const articlesPerPage = releaseNoteArticles.slice(
    MAX_ITEMS_PER_PAGE * Math.max(currentPage - 1, 0),
    MAX_ITEMS_PER_PAGE * Math.max(currentPage, 1),
  )

  const articleHeaders = articlesPerPage.map((article) =>
    pick(article, 'id', 'date', 'labels', 'sortKey', 'sectionId', 'titleLocales', 'directory'),
  )

  return {
    props: {
      locale: locale!,
      product,
      productName: PRODUCT_DISPLAY_NAMES[product],
      articleHeaders,
      totalPage,
      currentPage,
    },
    revalidate: 10,
  }
}

const Index: NextPage<Props> = ({ locale, product, productName, articleHeaders, totalPage, currentPage }) => {
  const router = useRouter()
  const { initialized, isPC, isTablet, isSp } = useMedia()

  const paginationPadding = isPC ? 5 : isTablet ? 3 : isSp ? 1 : 1
  const title = `${productName}のリリースノート`

  return (
    <Layout>
      <Head>
        <title>{`${title}｜ヘルプセンター｜SmartHR`}</title>
        <meta name="twitter:description" content={META_DESCRIPTION.releaseNote} />
        <meta name="twitter:title" content={`${title}｜ヘルプセンター｜SmartHR`} />
        <meta name="description" content={META_DESCRIPTION.releaseNote} />
      </Head>

      <PageHeading title={title} Icon={PRODUCT_ICONS[product]} />

      <Center align="center" gap="XXL">
        <Breadcrumb
          higherPages={[
            {
              title: 'リリースノート',
              href: internalPath.releaseNotesTop(),
            },
          ]}
          currentPageTitle={title}
        />

        <WithSidebar>
          <Section>
            <Stack as="ul" gap="XS">
              {articleHeaders.map((articleHeader, i) => (
                <li key={i}>
                  <ReleaseNoteItem locale={locale} product={product} articleHeader={articleHeader} />
                </li>
              ))}
            </Stack>

            <PaginationWrapper>
              {initialized && (
                <Pagination
                  total={totalPage}
                  current={currentPage}
                  onClick={(pageNumber: number) => {
                    router.push(internalPath.releaseNotesForProductByPage(product, pageNumber))
                  }}
                  padding={paginationPadding}
                />
              )}
            </PaginationWrapper>
          </Section>
        </WithSidebar>
      </Center>
    </Layout>
  )
}

export default Index

const Center = styled(Stack)`
  padding: 0 ${spacing.XS};
`

const Section = styled.section`
  width: 100%;
  max-width: 700px;
`

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${spacing.XXL};
`
