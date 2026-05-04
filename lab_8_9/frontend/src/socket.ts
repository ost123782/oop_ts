import { io, Socket } from 'socket.io-client'

const url = (import.meta.env.VITE_WS_URL as string) || 'http://localhost:3000'

export const socket: Socket = io(url, {
  transports: ['websocket'],
  autoConnect: true,
})
