import Link from 'next/link'
import styled from 'styled-components'

import { breakpoint, color, fontSize, interaction, leading, radius, spacing } from '@/styles/theme'

type Props = {
  href: string
  children: React.ReactNode
}

export const FaqLink: React.VFC<Props> = ({ href, children }) => {
  return (
    <Link passHref href={href}>
      <Anchor>{children}</Anchor>
    </Link>
  )
}

const Anchor = styled.a`
  display: flex;
  align-items: center;
  width: 325px;
  height: 100%;
  padding: ${spacing.XS};
  font-size: ${fontSize.M};
  line-height: ${leading.NORMAL};
  border: 1px solid ${color.BORDER};
  border-radius: ${radius.monjo_l};

  @media screen and (max-width: ${breakpoint.SP}px) {
    width: 100%;
  }

  &:focus,
  &:hover {
    opacity: ${interaction.hover.feedbackOpacity};
  }
`
