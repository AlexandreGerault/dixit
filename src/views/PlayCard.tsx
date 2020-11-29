import React, {FunctionComponent} from 'react'
import {Card} from '../components/ui/Card'
import Player from '../types/game/Player'
import {LayoutSidebar} from './LayoutSidebar'

type PlayCardProps = {
  players: Player[]
}

const PlayCard: FunctionComponent<PlayCardProps> = ({players}) => {
  return (
    <LayoutSidebar players={players}>
      <div>
        <p className="game__heading">Choisis une carte à jouer</p>
        <div className="cards-grid">
          <Card cardId="1.png" />
          <Card cardId="2.png" />
          <Card cardId="3.png" />
          <Card cardId="4.png" />
          <Card cardId="5.png" />
        </div>
      </div>
    </LayoutSidebar>
  )
}

export {PlayCard}
