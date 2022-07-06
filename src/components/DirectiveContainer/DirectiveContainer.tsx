import styled from 'styled-components'

import { FaBookOpenIcon, FaExclamationCircleIcon, FaRegLightbulbIcon } from '@/components/ui'
import { color, fontSize, spacing } from '@/styles/theme'

type DirectiveType = 'related' | 'tips' | 'alert' | 'dictionary'

type Props = {
  type: DirectiveType
  children: React.ReactNode
}

export const DirectiveContainer: React.VFC<Props> = ({ type, children }) => {
  switch (type) {
    case 'alert': {
      return (
        <AlertWrapper>
          <Header>
            <AlertHeaderIcon>
              <FaExclamationCircleIcon />
            </AlertHeaderIcon>
            注意点
          </Header>
          {children}
        </AlertWrapper>
      )
    }
    case 'tips': {
      return (
        <TipsWrapper>
          <Header>
            <TipsHeaderIcon>
              <FaRegLightbulbIcon />
            </TipsHeaderIcon>
            Tips
          </Header>
          {children}
        </TipsWrapper>
      )
    }
    case 'related': {
      return (
        <RelatedWrapper>
          <Header>
            <RelatedHeaderIcon>
              <FaBookOpenIcon />
            </RelatedHeaderIcon>
            関連コンテンツ
          </Header>
          {children}
        </RelatedWrapper>
      )
    }
    case 'dictionary': {
      // TODO: #337 デザインを適用する
      return (
        <DictionaryWrapper>
          <Header>
            <DictionaryHeaderIcon>
              <FaBookOpenIcon />
            </DictionaryHeaderIcon>
            関連用語
          </Header>
          {children}
        </DictionaryWrapper>
      )
    }
  }
}

// Common styles
const BaseWrapper = styled.aside`
  position: relative;
  padding: ${spacing.XS};
  margin: 1em 0;
  background-color: #f8f7f6;
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;

  > p:last-child {
    margin-bottom: 0;
  }
`

const Header = styled.h3`
  display: block;
  margin-bottom: ${spacing.XS};
  color: ${color.TEXT_BLACK};

  &&& {
    height: ${fontSize.L};
    margin-top: 0;
    line-height: ${fontSize.L};
  }
`

const BaseHeaderIcon = styled.span`
  margin-right: ${spacing.XXS};
  vertical-align: middle;
`

// alert directive
const AlertWrapper = styled(BaseWrapper)`
  background-color: rgba(224, 30, 90, 0.02);
  border-color: ${color.DANGER};
`

const AlertHeaderIcon = styled(BaseHeaderIcon)`
  color: ${color.DANGER};
`

// related directive
const RelatedWrapper = styled(BaseWrapper)`
  background-color: ${color.BACKGROUND};
  border-color: ${color.TEXT_GREY};
`

const RelatedHeaderIcon = styled(BaseHeaderIcon)`
  color: ${color.TEXT_GREY};
`

// tips directive
const TipsWrapper = styled(BaseWrapper)`
  background-color: rgba(255, 136, 0, 0.04);
  border-color: ${color.WARNING};
`

const TipsHeaderIcon = styled(BaseHeaderIcon)`
  color: ${color.WARNING};
`

// dictionary directive
const DictionaryWrapper = styled(BaseWrapper)``

const DictionaryHeaderIcon = styled(BaseHeaderIcon)``
