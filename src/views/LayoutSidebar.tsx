import React from 'react'
import {Sidebar} from '../components/ui/Sidebar'
import Player from '../types/game/Player'

type WithSideprops = {
  players: Player[]
}

const LayoutSidebar: React.FC<WithSideprops> = ({players, children}) => {
  return (
    <div className="sidebar-layout">
      <div className="sidebar-layout__content">{children}</div>
      <Sidebar players={players} />
    </div>
  )
}

export {LayoutSidebar}
