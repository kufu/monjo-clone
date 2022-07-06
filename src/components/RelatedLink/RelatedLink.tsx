import Link from 'next/link'
import styled from 'styled-components'

import { Stack } from '@/components/ui'
import { breakpoint, color, fontSize, interaction, radius, spacing } from '@/styles/theme'

type Props = {
  href: string
  description: string
  children: React.ReactNode
}

export const RelatedLink: React.VFC<Props> = ({ href, description, children }) => {
  return (
    <Link passHref href={href}>
      <Anchor>
        <Stack>
          <p id={href}>{description}</p>
          <Label aria-labelledby={href}>{children}</Label>
        </Stack>
      </Anchor>
    </Link>
  )
}

const Anchor = styled.a`
  display: flex;
  align-items: center;
  width: 495px;
  padding: ${spacing.S};
  font-size: ${fontSize.M};
  line-height: 0.75;
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

const Label = styled.label`
  font-size: ${fontSize.XL};
  font-weight: bold;
  cursor: pointer;
`
