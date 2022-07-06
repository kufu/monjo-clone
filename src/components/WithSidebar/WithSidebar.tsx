import styled from 'styled-components'

import { Sidebar } from '@/components/ui'
import { CONTENT_WIDTH } from '@/constants'

import { SideNavi } from './SideNavi'

type Props = {
  children: React.ReactNode
}

export const WithSidebar: React.VFC<Props> = ({ children }) => {
  return (
    <Wrapper>
      {/* NOTE: トークンで指定できないけどFigmaの指定は72px */}
      <Sidebar right contentsMinWidth="55%" gap={{ row: 'X3L', column: 'XXL' }}>
        <main>{children}</main>
        <SideNavi />
      </Sidebar>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  max-width: ${CONTENT_WIDTH};
`
