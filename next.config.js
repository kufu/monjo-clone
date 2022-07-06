const { ECMAVersionValidatorPlugin } = require('ecma-version-validator-webpack-plugin')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  scrollRestoration: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  env: {
    VERCEL_ENV: process.env.VERCEL_ENV,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    if (!isServer) {
      config.resolve.fallback['fs'] = false
    }

    return {
      ...config,
      plugins: [...config.plugins, new ECMAVersionValidatorPlugin({ ecmaVersion: 2020 })],
    }
  },
  i18n: {
    // i18nの設定がある場合、URLのパスの先頭は下記のようにlocaleを表す。
    // `/:locale/release-notes`
    // しかし、defaultLocaleに設定されたlocaleの場合、URLから`/:locale` が除外されて `/release-notes` というパスにリダイレクトされる。
    // この仕様を回避して、URLに必ずlocaleを含めるために下記のHACKを追加する
    // https://github.com/vercel/next.js/discussions/18419#discussioncomment-1561577
    locales: ['default', 'en-us', 'ja', 'ko', 'vi', 'zh-cn', 'zh-tw'], // default以外はsrc/utils/api/locale.tsの定義と一致させること
    defaultLocale: 'default',
    localeDetection: false,
  },
  trailingSlash: true,
  async redirects() {
    return [
      // NOTE: monjo公開時点では、monjoのトップページは提供しないため、リリースノートへリダイレクトさせる。
      {
        source: '/',
        destination: '/release-notes',
        permanent: false,
      },
    ]
  },
}
