import React, {FunctionComponent} from 'react'
import {Card} from '../components/ui/Card'
import Player from '../types/game/Player'
import {LayoutSidebar} from './LayoutSidebar'

type ResultsProps = {
  players: Player[]
  cards: {cardId: string; player: Player}[]
  selectedId: string
  goodId: string
}

const Results: FunctionComponent<ResultsProps> = ({
  cards,
  selectedId,
  goodId,
  players,
}) => {
  return (
    <LayoutSidebar players={players}>
      <div>
        <p className="game__heading">Résulats</p>
        <div className="cards-grid">
          {cards.map(c => (
            <Card
              key={c.cardId}
              cardId={c.cardId}
              isSelectedCard={selectedId === c.cardId}
              isGoodAnswer={goodId === c.cardId}
              playerName={c.player.name}
            />
          ))}
        </div>
      </div>
    </LayoutSidebar>
  )
}

export {Results}
