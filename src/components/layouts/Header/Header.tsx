import Link from 'next/link'
import { ComponentProps } from 'react'
import styled from 'styled-components'

import { LineUp, Select } from '@/components/ui'
import { zendeskUrl } from '@/constants/path'
import Logo from '@/images/logo.svg'
import { color, spacing } from '@/styles/theme'

type Props = {
  localeOptions: ComponentProps<typeof Select>['options']
}

export const Header: React.VFC<Props> = () => {
  return (
    <MonjoHeader>
      <Link passHref href={zendeskUrl.top()}>
        <LineUp as="a" vAlign="center" gap={0.75}>
          <Logo role="img" aria-label="SmartHR" />
          <VerticalLine />
          ヘルプセンター
        </LineUp>
      </Link>
      {/* TODO: Phase2で、言語変更・検索機能実装時に復活させる。 */}
      {/* <Cluster align="center" gap="S">
        <LineUp vAlign="center">
          言語設定
          <StyledSelect options={localeOptions} />
        </LineUp>
        <LineUp vAlign="center">
          さがす
          <Input />
        </LineUp>
      </Cluster> */}
    </MonjoHeader>
  )
}

const MonjoHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  padding: ${spacing.XS};
  background-color: ${color.WHITE};
`

const VerticalLine = styled.span`
  width: 1px;
  height: 32px;
  border-color: ${color.BORDER};
  border-style: solid;
  border-width: 0 1px 0 0;
`

// const StyledSelect = styled(Select)`
//   width: 130px;
// `
