import type { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyle } from '../styles/theme'

// TODO: Phase2でOGPが必要なら投入する
// const OGP_URL = ''
// const OGP_TITLE = ''
// const OGP_DESCRIPTION = ''

const MonjoApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="twitter:creator" content="@smarthr" />
        <meta name="twitter:card" content="summary" />
        {/* <meta property="og:image" content={OGP_URL} /> */}
        {/* <meta property="og:type" content="website" /> */}
        {/* <meta property="og:description" content={OGP_DESCRIPTION} /> */}
        {/* <meta property="og:title" content={OGP_TITLE} /> */}
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MonjoApp
