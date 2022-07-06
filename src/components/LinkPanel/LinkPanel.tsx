import Link from 'next/link'
import styled from 'styled-components'

import { Heading, IconComponentProps, Stack } from '@/components/ui'
import { breakpoint, color, fontSize, interaction, leading, radius, spacing } from '@/styles/theme'

type Props = {
  title: string
  titleHref: string
  titleTag?: React.ComponentProps<typeof Heading>['tag']
  Icon: React.VFC<IconComponentProps>
  links: ReadonlyArray<{
    title: string
    href: string
  }>
  moreHref: string
}

export const LinkPanel: React.VFC<Props> = ({ title, titleHref, titleTag = 'h3', Icon, links, moreHref }) => {
  return (
    <Panel splitAfter={2}>
      <Link passHref href={titleHref}>
        <a>
          <Header>
            <IconWrapper>
              <Icon color="BRAND" size={32} />
            </IconWrapper>
            <FunctionHeading tag={titleTag} type="blockTitle">
              {title}
            </FunctionHeading>
          </Header>
        </a>
      </Link>
      <List>
        {links.map((link, index) => (
          <li key={index}>
            <Link passHref href={link.href}>
              <Anchor>{link.title}</Anchor>
            </Link>
          </li>
        ))}
      </List>
      <Hr />
      <Footer>
        <Link passHref href={moreHref}>
          <Anchor>もっとみる</Anchor>
        </Link>
      </Footer>
    </Panel>
  )
}

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  margin-right: ${spacing.XXS};
`

const Panel = styled(Stack)`
  display: flex;
  width: 240px;
  height: 100%;
  padding: ${spacing.XS};
  font-size: ${fontSize.M};
  line-height: 2;
  border: 1px solid ${color.BORDER};
  border-radius: ${radius.monjo_l};

  @media screen and (max-width: ${breakpoint.SP}px) {
    width: 100%;
  }
`

const Header = styled.header`
  display: flex;
  align-items: center;

  &:focus,
  &:hover {
    opacity: ${interaction.hover.feedbackOpacity};
  }
`

const FunctionHeading = styled(Heading)`
  line-height: ${leading.NORMAL};
`

const List = styled.ul`
  /* TODO: Phase2で、discだと少し半径が大きいのでbefore要素で自力で構成したい */
  margin-left: ${spacing.XS};
  list-style: disc;
`

const Anchor = styled.a`
  &:focus,
  &:hover {
    text-decoration: underline;
  }
`

const Hr = styled.hr`
  width: 100%;
  color: ${color.BORDER};
  border-style: solid;
  border-width: 1px 0 0;
`

const Footer = styled.footer`
  text-align: right;
`
