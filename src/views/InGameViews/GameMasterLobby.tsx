import React, {FunctionComponent} from 'react'
import {onStartGameSubmitted} from '../../functions/OnStartGameSubmitted'
import Player from '../../types/game/Player'
import {LayoutSidebar} from './LayoutSidebar'

type GameMasterLobbyProps = {
  players: Player[]
}

const GameMasterLobby: FunctionComponent<GameMasterLobbyProps> = ({
  players,
}) => {
  return (
    <LayoutSidebar players={players}>
      <button
        className="game__heading"
        onClick={() => {
          onStartGameSubmitted()
        }}
      >
        Démarrer la partie
      </button>
    </LayoutSidebar>
  )
}

export {GameMasterLobby}
