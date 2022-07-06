import styled from 'styled-components'

import { FaLinkIcon, Text, TextLink } from '@/components/ui'
import { externalUrl } from '@/constants/path'
import { interaction } from '@/styles/theme'

export const UtsuwaTrial: React.VFC = () => {
  return (
    <Wrapper>
      <Text as="p">トライアルやご利用の検討の際は、下記までお問い合わせください。</Text>

      <Text as="p">
        <ContactLink>
          これからSmartHRのご利用を検討中の方&nbsp;→&nbsp;
          <StyledTextLink suffix={<FaLinkIcon />} href={externalUrl.contact()} target="_blank" rel="noopener noreferrer">
            問い合わせフォーム
          </StyledTextLink>
        </ContactLink>

        <ContactLink>
          すでにSmartHRをご利用中の方&nbsp;→&nbsp;
          <StyledTextLink suffix={<FaLinkIcon />} href={externalUrl.contactCs()} target="_blank" rel="noopener noreferrer">
            問い合わせフォーム
          </StyledTextLink>
        </ContactLink>
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  position: relative;
  padding: 1.2rem 2rem;
  margin: 1em 0;
  line-height: 1.5rem;
  background-color: #d4f4f5;
  border-radius: 6px;
`

const ContactLink = styled(Text)`
  display: block;
  font-weight: 600;
`

const StyledTextLink = styled(TextLink)`
  &:focus,
  &:hover {
    opacity: ${interaction.hover.feedbackOpacity};
  }
`
