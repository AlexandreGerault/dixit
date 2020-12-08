import {socket} from '../Socket'
import CreateRoomAction from '../types/events/sent/CreateRoomAction'
import {CreateRoomFormValues} from '../types/forms/CreateRoomFormValues'

const emitCreateRoom = (data: CreateRoomAction) => {
  socket.emit('createRoom', data)
}

const onCreateRoomFormSubmitted = (formValues: CreateRoomFormValues) => {
  emitCreateRoom({
    action: 'create',
    playerName: formValues.pseudo,
    roomName: formValues.roomName,
  })
}

export {onCreateRoomFormSubmitted}
