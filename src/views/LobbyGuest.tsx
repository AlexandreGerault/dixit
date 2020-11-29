import React, {FunctionComponent} from 'react'
import Player from '../types/game/Player'
import {LayoutSidebar} from './LayoutSidebar'

type LobbyGuestProps = {
  players: Player[]
}

const LobbyGuest: FunctionComponent<LobbyGuestProps> = ({players}) => {
  return (
    <LayoutSidebar players={players}>
      <p className="game__heading">La partie va bientôt démarrer...</p>
    </LayoutSidebar>
  )
}

export {LobbyGuest}
