import React, {FunctionComponent} from 'react'
import Player from '../../types/game/Player'

type SidebarProps = {
  players: Player[]
}

const Sidebar: FunctionComponent<SidebarProps> = ({players}: SidebarProps) => {
  const playerListItems = players.map(player => (
    <li key={player.name} className="sidebar__player-item">
      <span>
        {player.name} <span className="player-score">{player.score}</span>
      </span>
      <span>
        {player.master ? '👑 ' : ''}
        {player.status === 'done'
          ? ' ✔'
          : player.status === 'pending'
          ? ' ⏳'
          : ''}
      </span>
    </li>
  ))

  return (
    <div className="sidebar">
      <p className="sidebar__heading">Joueurs connectés</p>
      <ul className="sidebar__player-list">{playerListItems}</ul>
    </div>
  )
}

export {Sidebar}
