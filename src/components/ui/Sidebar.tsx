import React from 'react'
import Player from '../../types/game/Player'

type SidebarProps = {
  players: Player[]
}

const Sidebar: React.FunctionComponent<SidebarProps> = ({
  players,
}: SidebarProps) => {
  const playerListItems = players.map(player => (
    <li key={player.name}>
      {player.master ? '👑 ' : ''}
      {player.name}
      {player.status === 'done'
        ? ' ✔'
        : player.status === 'pending'
        ? ' ⏳'
        : ''}
    </li>
  ))

  return (
    <div>
      <p>Joueurs connectés</p>
      <ul>{playerListItems}</ul>
    </div>
  )
}

export {Sidebar}
