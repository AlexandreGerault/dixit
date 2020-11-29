import React, {FunctionComponent} from 'react'
import {Scoreboard} from '../components/ui/Scoreboard'
import Player from '../types/game/Player'
import {LayoutSidebar} from './LayoutSidebar'

type ScoreboardSceneProps = {
  players: Player[]
}

const ScoreboardScene: FunctionComponent<ScoreboardSceneProps> = ({
  players,
}) => {
  return (
    <LayoutSidebar players={players}>
      <div>
        <p className="game__heading">Résultat de la partie</p>
        <div>
          <Scoreboard players={players} />
        </div>
      </div>
    </LayoutSidebar>
  )
}

export {ScoreboardScene}
