import React from 'react'
import {CreateRoomForm} from '../components/forms/CreateRoomForm'
import {JoinRoomForm} from '../components/forms/JoinRoomForm'
import {TabItem} from '../components/navigation/TabItem'
import {TabNav} from '../components/navigation/TabNav'

const Home = () => (
  <div className="home">
    <div className="action-area">
      <TabNav>
        <TabItem tabKey="Rejoindre">
          <JoinRoomForm />
        </TabItem>
        <TabItem tabKey="Créer">
          <CreateRoomForm />
        </TabItem>
      </TabNav>
    </div>
  </div>
)

export {Home}
