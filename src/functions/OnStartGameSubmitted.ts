import {socket} from '../Socket'
import StartGameAction from '../types/events/sent/StartGameAction'

const emitStart = (values: StartGameAction) => {
  socket.emit('startGame', values)
}

const onStartGameSubmitted = () => {
  console.log('START GAME')
  emitStart({
    action: 'startGame',
  })
}

export {onStartGameSubmitted}
