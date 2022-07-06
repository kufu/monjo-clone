import styled from 'styled-components'

import { color, radius, spacing } from '@/styles/theme'

type Props = {
  label: string
  positive?: boolean
}

export const Label: React.VFC<Props> = ({ label, positive = false }) => {
  return positive ? <PositiveLabel>{label}</PositiveLabel> : <NegativeLabel>{label}</NegativeLabel>
}

const BasicLabel = styled.span`
  padding: ${spacing.MONJO_XXS} ${spacing.XXS};
  font-size: 11px;
  white-space: nowrap;
  border-radius: ${radius.monjo_max};
`

const PositiveLabel = styled(BasicLabel)`
  border: solid 1px ${color.WARNING};
`

const NegativeLabel = styled(BasicLabel)`
  border: solid 1px ${color.TEXT_GREY};
`
