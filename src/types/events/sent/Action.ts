import CreateRoomAction from './CreateRoomAction'
import JoinRoomAction from './JoinRoomAction'
import PlayCardAction from './PlayCardAction'
import VoteAction from './VoteAction'

type Action = CreateRoomAction | JoinRoomAction | PlayCardAction | VoteAction

export type {Action}
