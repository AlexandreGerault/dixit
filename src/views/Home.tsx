import React, {FC} from 'react'
import {CreateRoomForm} from '../components/forms/CreateRoomForm'
import {JoinRoomForm} from '../components/forms/JoinRoomForm'
import {TabItem} from '../components/navigation/TabItem'
import {TabNav} from '../components/navigation/TabNav'

type HomeProps = {
  onJoinSubmitted: Function
  onCreateSubmitted: Function
}

const Home: FC<HomeProps> = ({onJoinSubmitted, onCreateSubmitted}) => (
  <div className="home">
    <div className="action-area">
      <TabNav>
        <TabItem tabKey="Rejoindre">
          <JoinRoomForm onSubmit={onJoinSubmitted} />
        </TabItem>
        <TabItem tabKey="Créer">
          <CreateRoomForm onSubmit={onCreateSubmitted} />
        </TabItem>
      </TabNav>
    </div>
  </div>
)

export {Home}
