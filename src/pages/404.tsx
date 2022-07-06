import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import { Layout } from '@/components/layouts/Layout'
import { PageHeading } from '@/components/PageHeading'
import { FaFileIcon, Stack, Text } from '@/components/ui'
import { CONTENT_WIDTH, META_DESCRIPTION, zendeskUrl } from '@/constants'
import { color, fontSize, leading, spacing } from '@/styles/theme'

const Index = () => {
  const title = '404 Not Found'

  return (
    <Layout>
      <Head>
        <title>{`${title}｜ヘルプセンター｜SmartHR`}</title>
        <meta name="description" content={META_DESCRIPTION.help} />
      </Head>

      <PageHeading title={title} Icon={FaFileIcon} />

      <Center align="center" gap="L">
        <Section>
          <SectionHeading>お探しのページは見つかりません。</SectionHeading>
          <Stack gap="S">
            <Text>指定されたページは存在しないか、または移動した可能性があります。</Text>
            <Link passHref href={zendeskUrl.top()}>
              <Anchor>TOPページに戻る</Anchor>
            </Link>
          </Stack>
        </Section>
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
  max-width: ${CONTENT_WIDTH};
`

const SectionHeading = styled.h2`
  padding-bottom: ${spacing.XS};
  margin-bottom: ${spacing.MONJO_ML};
  font-size: ${fontSize.MONJO_XXL};
  font-weight: bold;
  line-height: ${leading.TIGHT};
  border: solid ${color.BORDER};
  border-width: 0 0 1px;
`

const Anchor = styled.a`
  display: inline-block;
  margin-top: ${spacing.M};
  color: ${color.TEXT_LINK};

  &:hover {
    text-decoration: underline;
  }
`
