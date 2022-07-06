import { NextRequest, NextResponse } from 'next/server'

function withBasicAuth(req: NextRequest) {
  if (process.env.VERCEL_ENV !== 'preview') {
    return // allow
  }

  const basicAuth = req.headers.get('authorization')

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')

    if (user === 'user' && pwd === 'password') {
      return // allow
    }
  }

  return new Response('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}

function withLocale(request: NextRequest) {
  const publicFileRe = /\.(.*)$/

  const shouldHandleLocale =
    !publicFileRe.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.startsWith('/api/') && // NOTE: release-notes/api を引っ掛けないように注意
    request.nextUrl.locale === 'default'

  if (shouldHandleLocale) {
    // NOTE: リダイレクト先は絶対パスで指定しないと、Next.js 12.1から動作しなくなる。
    // https://nextjs.org/docs/messages/middleware-relative-urls
    const url = request.nextUrl.clone()
    url.pathname = `/ja${url.pathname}`

    return NextResponse.redirect(url)
  }
}

export function middleware(req: NextRequest) {
  return withBasicAuth(req) || withLocale(req)
}
