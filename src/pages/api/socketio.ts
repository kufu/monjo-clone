import chokidar from 'chokidar'
import { Server as HttpServer } from 'http'
import { NextApiRequest } from 'next'
import { Server as SocketIOServer } from 'socket.io'
import { FIXME_any } from 'types'

import { NextApiResponseServerIO } from '@/types/server'
import { readArticleFile } from '@/utils/api'

const socketHandler = async (_: NextApiRequest, res: NextApiResponseServerIO) => {
  // NOTE: live updateが動くのはローカルのdevelopment環境のみ
  if (process.env.NODE_ENV !== 'development') {
    res.end()
    return
  }

  if (res.socket.server.io) {
    console.log('socket is already created.')
    res.end()
    return
  }

  console.log('socket is initializing...')

  const httpServer: HttpServer = res.socket.server as FIXME_any
  const io = new SocketIOServer(httpServer, {
    path: '/api/socketio',
  })

  res.socket.server.io = io

  const watcher = chokidar.watch('./content')
  watcher.on('ready', () => {
    watcher.on('change', async (path) => {
      console.log(`Changed: ${path}`)
      const article = await readArticleFile(path)

      io.emit('articlechange', { article })
    })
  })

  console.log('socket is initialized')

  res.end()
}

export default socketHandler
