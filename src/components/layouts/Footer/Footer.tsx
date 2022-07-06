import styled from 'styled-components'

import { Cluster, Stack, TextLink } from '@/components/ui'
import { CONTENT_WIDTH, externalUrl } from '@/constants'
import Logo from '@/images/logo.svg'
import { color, fontSize, spacing } from '@/styles/theme'

export const FOOTER_HEIGHT = '191px'

export const Footer = () => {
  return (
    <MonjoFooter>
      <FooterContents justify="space-between">
        <Stack>
          <a href={externalUrl.smartHrJp()} target="_blank" rel="noopener noreferrer">
            <LogoWrapper>
              <Logo role="img" aria-label="SmartHR" />
            </LogoWrapper>
          </a>
          <small>&copy; SmartHR, Inc.</small>
        </Stack>
        <Cluster gap={{ row: 0, column: 'S' }}>
          <FooterLink href={externalUrl.smartHrJp()} target="_blank" rel="noopener noreferrer">
            運営会社
          </FooterLink>
          <FooterLink href={externalUrl.facebook()} target="_blank" rel="noopener noreferrer">
            公式Facebook
          </FooterLink>
          <FooterLink href={externalUrl.twitter()} target="_blank" rel="noopener noreferrer">
            公式Twitter
          </FooterLink>
        </Cluster>
      </FooterContents>
    </MonjoFooter>
  )
}

const MonjoFooter = styled.footer`
  display: flex;
  justify-content: center;
  min-height: ${FOOTER_HEIGHT};
  padding-top: ${spacing.M};
  padding-right: ${spacing.S};
  padding-left: ${spacing.S};
  margin-top: auto;
  background-color: ${color.COLUMN};
`

const FooterContents = styled(Cluster)`
  width: 100%;
  max-width: ${CONTENT_WIDTH};
`

const FooterLink = styled(TextLink)`
  height: fit-content;
  font-size: ${fontSize.M};
  color: ${color.TEXT_BLACK};
  box-shadow: none;
`

const LogoWrapper = styled.div`
  margin-left: -5px;
`
