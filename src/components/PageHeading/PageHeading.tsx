import Image from 'next/image'
import styled from 'styled-components'

import { Cluster, IconComponentProps } from '@/components/ui'
import heroImage from '@/images/hero.png'
import { color, fontSize, leading, radius, shadow, spacing } from '@/styles/theme'

const HERO_HEIGHT = '120px'

type Props = {
  title: string
  Icon: React.VFC<IconComponentProps>
  withoutHeadingTag?: boolean
}

export const PageHeading: React.VFC<Props> = ({ title, Icon, withoutHeadingTag = false }) => {
  return (
    <Wrapper justify="center">
      <BackgroundImageWrapper>
        <Image quality={75} priority={false} layout="fill" objectFit="cover" objectPosition="50% 50%" src={heroImage} alt="" />
      </BackgroundImageWrapper>
      <HeadingWrapper>
        {withoutHeadingTag ? (
          <Hero>
            <IconWrapper>
              <Icon color="BRAND" size={32} aria-hidden="true" />
            </IconWrapper>
            {title}
          </Hero>
        ) : (
          <HeroHeading>
            <IconWrapper>
              <Icon color="BRAND" size={32} aria-hidden="true" />
            </IconWrapper>
            {title}
          </HeroHeading>
        )}
      </HeadingWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(Cluster)`
  margin-bottom: ${spacing.XS};

  font-size: ${fontSize.XL};
  color: ${color.TEXT_WHITE};
`

const HeadingWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  min-height: 84px;
  margin: -49px ${spacing.XS} 0;
`

const HeroHeading = styled.h1`
  position: relative;
  display: flex;
  align-items: center;

  padding: ${spacing.S} ${spacing.MONJO_SM};
  font-weight: bold;
  line-height: ${leading.NORMAL};
  color: ${color.TEXT_BLACK};

  background-color: ${color.WHITE};
  border-radius: ${radius.monjo_l};
  box-shadow: ${shadow.MONJO_PAGE_HEADING};
`
const Hero = HeroHeading.withComponent('div')

const BackgroundImageWrapper = styled.div`
  /* NOTE: next/Imageは position: absoluteで展開されるため注意 */
  position: relative;
  width: 100%;
  height: ${HERO_HEIGHT};
  background-color: ${color.BRAND};
`

const IconWrapper = styled.div`
  height: 32px;
  margin-right: ${spacing.XS};
`
