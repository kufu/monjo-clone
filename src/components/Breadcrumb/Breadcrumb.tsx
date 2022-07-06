import Link from 'next/link'
import styled, { css } from 'styled-components'

import { Cluster } from '@/components/ui'
import { CONTENT_WIDTH, zendeskUrl } from '@/constants'
import { color, fontSize, interaction, spacing, VISUALLY_HIDDEN_STYLE } from '@/styles/theme'

type Props = {
  higherPages?: Array<{
    title: string
    href: string
  }>
  currentPageTitle: string
  currentPageVisibility?: boolean
}

export const Breadcrumb: React.VFC<Props> = ({ higherPages = [], currentPageTitle, currentPageVisibility = true }) => {
  return (
    <Navigation>
      <Cluster as="ol" gap={{ column: 0, row: 'XXS' }}>
        <li>
          <Link passHref href={zendeskUrl.top()}>
            <a>SmartHRヘルプセンター</a>
          </Link>
        </li>
        {higherPages.map((item) => (
          <li key={item.title}>
            <Link passHref href={item.href}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
        <CurrentListItem aria-current="page" currentVisibility={currentPageVisibility}>
          {currentPageTitle}
        </CurrentListItem>
      </Cluster>
    </Navigation>
  )
}

const Navigation = styled.nav`
  width: 100%;
  max-width: ${CONTENT_WIDTH};
  font-size: ${fontSize.S};

  a {
    color: ${color.TEXT_LINK};
    text-decoration: underline;

    &:focus,
    &:hover {
      opacity: ${interaction.hover.feedbackOpacity};
    }
  }

  li:not(:first-child) {
    &::before {
      margin: 0 ${spacing.XXS};
      content: '>';
    }
  }
`

const CurrentListItem = styled.li<{ currentVisibility: boolean }>(
  ({ currentVisibility }) =>
    css`
      ${!currentVisibility && VISUALLY_HIDDEN_STYLE}
    `,
)
