import { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'node:querystring'
import styled from 'styled-components'

import { Breadcrumb } from '@/components/Breadcrumb'
import { Label } from '@/components/Label'
import { Layout } from '@/components/layouts/Layout'
import { MarkdownContainer } from '@/components/MarkdownContainer'
import { PageHeading } from '@/components/PageHeading'
import { Cluster, FaFileIcon, LineUp, Stack } from '@/components/ui'
import { WithSidebar } from '@/components/WithSidebar'
import { HELP_PAGE_LABELS, internalPath, META_DESCRIPTION } from '@/constants'
import { useArticleLiveUpdate } from '@/hooks'
import { fontSize, leading, spacing } from '@/styles/theme'
import { defaultLocale, extractSectionHierarchy, getAllArticles, getArticleById, getSectionById, productIdMap } from '@/utils/api'

type Props = InferGetStaticPropsType<typeof getStaticProps>

type Params = ParsedUrlQuery & {
  id: string
}

export const getStaticPaths = async () => {
  const articles = await getAllArticles()
  const productSectionIds = new Set(Object.values(productIdMap))

  const paths: GetStaticPathsResult['paths'] = []
  articles
    .filter(({ sectionId }) => !productSectionIds.has(sectionId))
    .forEach((article) => {
      Object.keys(article.titleLocales).forEach((locale) => {
        paths.push({
          params: {
            id: article.id,
          },
          locale,
        })
      })
    })

  return {
    fallback: false,
    paths,
  }
}

export const getStaticProps = async (context: GetStaticPropsContext<Params>) => {
  let { locale } = context
  locale ||= defaultLocale

  const { id } = context.params!
  const article = await getArticleById(id)
  const articleSection = await getSectionById(article.sectionId)
  const sectionHierarchy = await extractSectionHierarchy(articleSection)
  const sections = sectionHierarchy.map((section) => ({
    id: section.id,
    title: section.locales[String(locale)] || section.locales[defaultLocale],
  }))

  return {
    props: {
      id,
      title: article.titleLocales[locale],
      body: article.bodyLocales[locale],
      labels: article.labels,
      sections,
      locale,
    },
    revalidate: 10,
  }
}

const ReleaseNotePage: NextPage<Props> = ({ id, title, body, labels, sections, locale }) => {
  const { liveTitle, liveBody } = useArticleLiveUpdate(id, title, body, locale)

  return (
    <Layout>
      <Head>
        <title>{`${liveTitle}｜ヘルプセンター｜SmartHR`}</title>
        <meta name="twitter:description" content={META_DESCRIPTION.releaseNote} />
        <meta name="twitter:title" content={`${title}｜ヘルプセンター｜SmartHR`} />
        <meta name="description" content={META_DESCRIPTION.releaseNote} />
      </Head>

      <PageHeading title={sections[1]!.title} Icon={FaFileIcon} withoutHeadingTag />

      <Center align="center" gap="XXL">
        <Breadcrumb
          higherPages={[
            ...sections.map((section) => ({
              title: section.title,
              href: internalPath.section(section.id),
            })),
          ]}
          // NOTE: 記事タイトルが非常に長くなってしまうので表示を省略する
          currentPageTitle={liveTitle}
          currentPageVisibility={false}
        />

        <WithSidebar>
          <Article>
            <ArticleHeading>{liveTitle}</ArticleHeading>
            <LabelWrapper>
              <LabelKey>対象:</LabelKey>

              <LabelValues>
                <LineUp vAlign="center" gap="XS">
                  <Cluster align="center" gap="XXS">
                    {labels
                      .filter((label) => HELP_PAGE_LABELS.includes(label))
                      .map((label) => (
                        <Label key={label} label={label} />
                      ))}
                  </Cluster>
                </LineUp>
              </LabelValues>
            </LabelWrapper>
            <MarkdownContainer markdown={liveBody} articleId={id} buildTableOfContents />
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
  margin-bottom: ${spacing.XS};
  font-size: ${fontSize.MONJO_XXL};
  font-weight: bold;
  line-height: ${leading.TIGHT};
  border-width: 0 0 1px;
`

const LabelWrapper = styled.dl`
  display: flex;
  align-items: center;
  margin-bottom: ${spacing.MONJO_ML};
`

const LabelKey = styled.dt`
  min-width: 3em;
`

const LabelValues = styled.dd`
  margin-left: ${spacing.X3S};
`
