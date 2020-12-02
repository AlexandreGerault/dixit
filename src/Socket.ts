import * as SocketIO from 'socket.io-client'
import {SocketAddress, SocketPort} from './constants/Server'

const socket = SocketIO.connect(`${SocketAddress}:${SocketPort}`)

export {socket}
