import React, {FunctionComponent} from 'react'
import {Card} from '../components/ui/Card'
import Player from '../types/game/Player'
import {LayoutSidebar} from './LayoutSidebar'

type WaitingProps = {
  players: Player[]
  cardId: string
}

const Waiting: FunctionComponent<WaitingProps> = ({players, cardId}) => {
  return (
    <LayoutSidebar players={players}>
      <div>
        <p className="game__heading">En attente des autres joueurs</p>
        <div className="cards-grid">
          <Card cardId={cardId} />
        </div>
      </div>
    </LayoutSidebar>
  )
}

export {Waiting}
