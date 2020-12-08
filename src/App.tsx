import React, {useContext, useEffect, useState} from 'react'
import {GameContext} from './contexts/GameContext'
import {onCreateRoomFormSubmitted} from './functions/OnCreateRoomFormSubmitted'
import {onJoinFormSubmitted} from './functions/OnJoinFormSubmitted'
import {socket} from './Socket'
import {ConnectedToRoomEvent} from './types/events/received/ConnectedToRoomEvent'
import {ErrorEvent} from './types/events/received/ErrorEvent'
import {UserHasJoinedEvent} from './types/events/received/UserHasJoinedEvent'
import {UserHasLeftEvent} from './types/events/received/UserHasLeftEvent'
import Player from './types/game/Player'
import {GameStep} from './types/game/Step'
import {Game} from './views/Game'
import {Home} from './views/Home'

function App() {
  const [isInGame, setIsInGame] = useState(false)
  const [players, setPlayers] = useState<Player[]>([])
  const [name, setName] = useState<string>('')
  const [step, setStep] = useState<GameStep>('lobby')
  const [isHost, setIsHost] = useState<boolean>(false)

  const displayScene = () => {
    if (isInGame) {
      return (
        <GameContext.Provider
          value={{players, setPlayers, name, step, host: isHost}}
        >
          <Game />
        </GameContext.Provider>
      )
    } else {
      return (
        <Home
          onJoinSubmitted={onJoinFormSubmitted}
          onCreateSubmitted={onCreateRoomFormSubmitted}
        />
      )
    }
  }

  useEffect(() => {
    socket.on('connect', () => console.log('Connect'))
    socket.on('disconnect', () => console.log('Disconnect'))
    socket.on('onConnect', (data: ConnectedToRoomEvent) => {
      setIsHost(data.host)
      setIsInGame(true)
    })
    socket.on('joinRoom', (data: UserHasJoinedEvent) => {
      console.log('A user joined the room. Refresh players list')
      console.log(data.players)
      setPlayers(data.players)
    })
    socket.on('leaveRoom', (data: UserHasLeftEvent) => {
      console.log('A user left the room. Refresh players list')
      console.log(data.players)
      setPlayers(data.players)
    })
    socket.on('error', (e: ErrorEvent) => alert(`[${e.name}] ${e.message}`))

    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off('onConnect')
      socket.off('joinRoom')
      socket.off('leaveRoom')
    }
  }, [])

  return displayScene()
}

export default App
