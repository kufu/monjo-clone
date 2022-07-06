import Link from 'next/link'
import { VFC } from 'react'
import styled from 'styled-components'

import { ADDON_LIST, FUNCTION_LIST, OTHERS_LIST, zendeskUrl } from '@/constants'
import { fontSize, spacing, VISUALLY_HIDDEN_STYLE } from '@/styles/theme'

import { Cluster, Heading, IconComponentProps, SmartHRBeginnerMarkIcon, Stack } from '../ui'

const Item: VFC<{
  Icon?: VFC<IconComponentProps>
  href: string
  title: string
}> = ({ Icon, href, title }) => (
  <li>
    <Link passHref href={href}>
      <Cluster as="a" align="center" gap="XXS">
        {Icon && <Icon color="BRAND" size={20} />}
        {title}
      </Cluster>
    </Link>
  </li>
)

export const SideNavi = () => {
  return (
    <Aside>
      <nav>
        <HiddenHeading tag="h2">ナビゲーションメニュー</HiddenHeading>
        <Stack gap="L">
          <section>
            <SectionHeading>カテゴリー</SectionHeading>
            <Stack as="ul" gap="XS">
              <Item Icon={SmartHRBeginnerMarkIcon} href={zendeskUrl.guideForAdmin()} title="管理者向け使い方ガイド" />
              <Item Icon={SmartHRBeginnerMarkIcon} href={zendeskUrl.guideForEmployee()} title="従業員向け使い方ガイド" />
            </Stack>
          </section>

          <section>
            <SectionHeading>機能で調べる</SectionHeading>
            <Stack as="ul" gap="XS">
              {FUNCTION_LIST.map((item) => (
                <Item key={item.title} Icon={item.Icon} href={item.titleHref} title={item.title} />
              ))}
            </Stack>
          </section>

          <section>
            <SectionHeading>有料オプション</SectionHeading>
            <Stack as="ul" gap="XS">
              {ADDON_LIST.map((item) => (
                <Item key={item.title} Icon={item.Icon} href={item.titleHref} title={item.title} />
              ))}
            </Stack>
          </section>

          <section>
            <SectionHeading>その他</SectionHeading>
            <Stack as="ul" gap="XS">
              {OTHERS_LIST.map((item) => (
                <Item key={item.title} Icon={item.Icon} href={item.titleHref} title={item.title} />
              ))}
            </Stack>
          </section>
        </Stack>
      </nav>
    </Aside>
  )
}

const Aside = styled.aside`
  width: 256px;

  a:hover {
    text-decoration: underline;
  }
`

const HiddenHeading = styled(Heading)`
  ${VISUALLY_HIDDEN_STYLE};
`

const SectionHeading = styled.h3`
  margin-bottom: ${spacing.XS};
  font-size: ${fontSize.L};
  font-weight: bold;
`
