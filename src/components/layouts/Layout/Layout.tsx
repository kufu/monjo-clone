import styled from 'styled-components'

import { Footer } from '@/components/layouts/Footer'
import { Header } from '@/components/layouts/Header'
import { HEADER_LOCALE_OPTIONS } from '@/constants'

type Props = {
  children: React.ReactNode
}

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <Container>
      <Header localeOptions={HEADER_LOCALE_OPTIONS} />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </Container>
  )
}

const MainContainer = styled.div`
  padding-bottom: 112px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
