import React, {FunctionComponent} from 'react'
import Player from '../types/game/Player'
import {LayoutSidebar} from './LayoutSidebar'

type GameMasterLobbyProps = {
  players: Player[]
}

const GameMasterLobby: FunctionComponent<GameMasterLobbyProps> = ({
  players,
}) => {
  return (
    <LayoutSidebar players={players}>
      <button className="game__heading">Démarrer la partie</button>
    </LayoutSidebar>
  )
}

export {GameMasterLobby}
