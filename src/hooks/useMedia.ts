import { useEffect, useState } from 'react'

import { breakpoint } from '@/styles/theme'

export const useMedia = () => {
  const [initialized, setInitialized] = useState(false)

  // NOTE: Server（SSR/SSG）とClientのrenderingにミスマッチが生じないように、初期値はwindowを参照せず0クリアしている。
  // https://nextjs.org/docs/messages/react-hydration-error
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const onResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    setInitialized(true)
    onResize()
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  const { width } = windowSize

  return {
    initialized,
    windowSize,
    isPC: breakpoint.TABLET <= width,
    isTablet: breakpoint.SP <= width && width < breakpoint.TABLET,
    isSp: width < breakpoint.SP,
  }
}
