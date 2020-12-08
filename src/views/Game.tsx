import React, {useEffect} from 'react'
import {useGame} from '../hooks/useGame'
import {socket} from '../Socket'
import {GameMasterLobby} from './InGameViews/GameMasterLobby'
import {LobbyGuest} from './InGameViews/LobbyGuest'

const Game = () => {
  const {players, step, host} = useGame()

  const displayRightScene = () => {
    switch (step) {
      case 'lobby': {
        return host ? (
          <GameMasterLobby players={players} />
        ) : (
          <LobbyGuest players={players} />
        )
      }
      default:
        return <LobbyGuest players={players} />
    }
  }

  useEffect(() => {
    socket.on('gameStarted', () => console.log('Game has just started'))

    return () => {
      socket.off('gameStarted')
    }
  }, [])

  return <>{displayRightScene()}</>
}

export {Game}
