import React, {FunctionComponent} from 'react'
import Player from '../../types/game/Player'

type ScoreboardProps = {
  players: Player[]
}

const Scoreboard: FunctionComponent<ScoreboardProps> = ({
  players,
}: ScoreboardProps) => {
  return (
    <div className="scoreboard">
      <ul className="scoreboard__list">
        {players
          .sort((p1, p2) => p2.score - p1.score)
          .map(p => (
            <li key={p.name} className="scoreboard__player">
              <span>{p.name}</span>
              <span>{p.score}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}

export {Scoreboard}
