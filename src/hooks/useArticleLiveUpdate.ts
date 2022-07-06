import { useEffect, useState } from 'react'
import { connect } from 'socket.io-client'

import { Article } from '@/utils/api'

export type ArticleResponse = {
  article: Article | null
}

export const useArticleLiveUpdate = (id: string, title: string, body: string, locale: string) => {
  const [content, setContent] = useState({ title, body })
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    // NOTE: live updateが動くのはローカルのdevelopment環境のみ
    if (process.env.NODE_ENV === 'development') {
      const socket = connect({
        path: '/api/socketio',
      })

      socket.on('connect', () => {
        console.log(`WebSocket connected for live reload: ${socket.id}`)
        setConnected(true)
      })

      socket.on('disconnect', () => {
        console.log(`WebSocket disconnected: ${socket.id}`)
        setConnected(false)
      })

      socket.on('articlechange', ({ article }: ArticleResponse) => {
        // NOTE: Next.js側は変更を検出したすべての記事をブロードキャストするので、
        // 現在表示している記事と一致する場合のみ反映する
        if (!article || article.id !== id) return

        // NOTE: article.idが同一でも別言語の可能性があるので、
        // 現在表示している記事の本文が未定義の場合も無視する
        if (typeof article.bodyLocales[locale] === 'undefined') return

        setContent({
          title: article.titleLocales[locale],
          body: article.bodyLocales[locale],
        })
      })

      return () => {
        if (socket) socket.disconnect()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    liveTitle: content.title,
    liveBody: content.body,
    connected,
  }
}
