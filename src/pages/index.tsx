import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

import { FaqLink } from '@/components/FaqLink'
import { GuideLink } from '@/components/GuideLink'
import { Layout } from '@/components/layouts/Layout'
import { LinkPanel } from '@/components/LinkPanel'
import { RelatedLink } from '@/components/RelatedLink'
import { Cluster, Heading, Stack, TextLink } from '@/components/ui'
import {
  ADDON_LIST,
  CONTENT_WIDTH,
  externalUrl,
  FAQ_LIST,
  FUNCTION_LIST,
  META_DESCRIPTION,
  OTHERS_LIST,
  RELATED_LINK_LIST,
  zendeskUrl,
} from '@/constants'
import { useMedia } from '@/hooks'
import heroImage from '@/images/hero.png'
import { breakpoint, color, fontSize, spacing, VISUALLY_HIDDEN_STYLE } from '@/styles/theme'

const PC_HERO_HEIGHT = '355px'
const SP_HERO_HEIGHT = '237px'

// NOTE: Phase 1時点ではヘルプセンターのトップページは未完成のため、
// 万が一にも表示されないようにrenderを止めておく
const PHASE_1 = true as boolean

const Index = () => {
  const { isSp } = useMedia()

  if (PHASE_1) return null

  return (
    <Layout>
      <Head>
        <title>ヘルプセンター｜SmartHR</title>
        <meta name="twitter:description" content={META_DESCRIPTION.help} />
        <meta name="twitter:title" content="ヘルプセンター｜SmartHR" />
        <meta name="description" content={META_DESCRIPTION.help} />
      </Head>
      <Hero>
        <Image height={isSp ? SP_HERO_HEIGHT : PC_HERO_HEIGHT} layout="fixed" objectFit="cover" src={heroImage} alt="" />
        <HeroContent>「やあ、ここはmonjo建設予定地だよ。」</HeroContent>
      </Hero>

      {!isSp && (
        <HeroHint>
          SmartHRのご利用は初めてですか？
          <TextLink href={externalUrl.school()} target="_blank" rel="noopener noreferrer">
            SmartHRスクール
          </TextLink>
          で仕組みや使い方を学びましょう。
        </HeroHint>
      )}

      <Cluster justify="center">
        {/* NOTE: トークンで指定できないけどFigmaの指定は72px */}
        <Main as="main" align="center" gap="X3L">
          <Section>
            <HiddenHeading tag="h2">使い方ガイド</HiddenHeading>
            <Cluster as="ul" gap="XS">
              <StretchedLi>
                <GuideLink isSp={isSp} href={zendeskUrl.guideForAdmin()} imageType="admin">
                  管理者向け
                  <br />
                  使い方ガイド
                </GuideLink>
              </StretchedLi>
              <StretchedLi>
                <GuideLink isSp={isSp} href={zendeskUrl.guideForEmployee()} imageType="employee">
                  従業員向け
                  <br />
                  使い方ガイド
                </GuideLink>
              </StretchedLi>
            </Cluster>
          </Section>

          <Section>
            <SectionHeading tag="h2">よくある質問</SectionHeading>
            <Cluster as="ul" gap="XS">
              {FAQ_LIST.map((faq) => (
                <StretchedLi key={faq.title}>
                  <FaqLink href={faq.href}>{faq.title}</FaqLink>
                </StretchedLi>
              ))}
            </Cluster>
          </Section>

          <Section>
            <SectionHeading tag="h2">機能で調べる</SectionHeading>
            <Cluster as="ul" gap="XS">
              {FUNCTION_LIST.map(({ title, titleHref, Icon, links, moreHref }) => (
                <StretchedLi key={title}>
                  <LinkPanel title={title} titleHref={titleHref} Icon={Icon} links={links} moreHref={moreHref} />
                </StretchedLi>
              ))}
            </Cluster>
          </Section>

          <Section>
            <SectionHeading tag="h2">有料オプション</SectionHeading>
            <Cluster as="ul" gap="XS">
              {ADDON_LIST.map(({ title, titleHref, Icon, links, moreHref }) => (
                <StretchedLi key={title}>
                  <LinkPanel title={title} titleHref={titleHref} Icon={Icon} links={links} moreHref={moreHref} />
                </StretchedLi>
              ))}
            </Cluster>
          </Section>

          <Section>
            <SectionHeading tag="h2">その他</SectionHeading>
            <Cluster as="ul" gap="XS">
              {OTHERS_LIST.map(({ title, titleHref, Icon, links, moreHref }) => (
                <StretchedLi key={title}>
                  <LinkPanel title={title} titleHref={titleHref} Icon={Icon} links={links} moreHref={moreHref} />
                </StretchedLi>
              ))}
            </Cluster>
          </Section>

          <Section>
            <HiddenHeading tag="h2">関連サイト</HiddenHeading>
            <Cluster
              as="ul"
              gap={{
                row: 'XS',
                /* NOTE: トークンで指定できないけどFigmaの指定は18px */
                column: 'XS',
              }}
            >
              {RELATED_LINK_LIST.map((link) => (
                <RelatedLink key={link.title} href={link.href} description={link.description}>
                  {link.title}
                </RelatedLink>
              ))}
            </Cluster>
          </Section>
        </Main>
      </Cluster>
    </Layout>
  )
}

export default Index

const Hero = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${PC_HERO_HEIGHT};
  padding: ${spacing.XS};
  overflow: hidden;
  font-size: ${fontSize.XXL};
  color: ${color.TEXT_WHITE};
  background-color: ${color.BRAND};

  @media screen and (max-width: ${breakpoint.SP}px) {
    height: ${SP_HERO_HEIGHT};
  }
`

const HeroContent = styled.p`
  position: absolute;
`

const HeroHint = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 68px;
  font-size: ${fontSize.M};
  font-weight: bold;
  background-color: ${color.BACKGROUND};
`

const Main = styled(Stack)`
  width: ${CONTENT_WIDTH};
  padding-top: ${spacing.MONJO_X4L};

  @media screen and (max-width: ${breakpoint.SP}px) {
    width: 100%;
    padding: ${spacing.XL} ${spacing.XS};
  }
`

const Section = styled.section`
  width: 100%;
`

const HiddenHeading = styled(Heading)`
  ${VISUALLY_HIDDEN_STYLE}
`

const SectionHeading = styled(Heading)`
  margin-bottom: ${spacing.MONJO_ML};
  text-align: center;
`

const StretchedLi = styled.li`
  @media screen and (max-width: ${breakpoint.SP}px) {
    width: 100%;
  }
`
