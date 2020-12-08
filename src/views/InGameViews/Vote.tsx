import React, {FunctionComponent} from 'react'
import {Card} from '../../components/ui/Card'
import Player from '../../types/game/Player'
import {LayoutSidebar} from './LayoutSidebar'

type VoteProps = {
  players: Player[]
  cards: string[]
}

const Vote: FunctionComponent<VoteProps> = ({players, cards}) => {
  return (
    <LayoutSidebar players={players}>
      <div>
        <p className="game__heading">Vote pour une carte</p>
        <div className="cards-grid">
          {cards.map(c => (
            <Card cardId={c} key={c} />
          ))}
        </div>
      </div>
    </LayoutSidebar>
  )
}

export {Vote}
