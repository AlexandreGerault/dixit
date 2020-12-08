import {socket} from '../Socket'
import JoinRoomAction from '../types/events/sent/JoinRoomAction'
import {JoinRoomFormValues} from '../types/forms/JoinRoomFormValues'

const emitJoin = (values: JoinRoomAction) => {
  socket.emit('joinRoom', values)
}

const onJoinFormSubmitted = (values: JoinRoomFormValues) => {
  emitJoin({
    playerName: values.pseudo,
    sha: values.room,
    action: 'join',
  })
}

export {onJoinFormSubmitted}
