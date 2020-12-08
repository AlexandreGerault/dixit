import Player from '../../game/Player'

type ConnectedToRoomEvent = {
  users: Player[]
  host: boolean
}

export type {ConnectedToRoomEvent}
