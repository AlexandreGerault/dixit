import React, {FunctionComponent, useState} from 'react'
import PropTypes, {InferProps} from 'prop-types'
import {GetTabItemFromKey} from '../../functions/GetTabItemFromKey'
import {GetTabKeysFromChildren} from '../../functions/GetTabKeysFromChildren'
import {TabItem} from './TabItem'

function TabNav({children}: InferProps<typeof TabNav.propTypes>) {
  const [tabKeys, setTabKeys] = useState(() => GetTabKeysFromChildren(children))
  const [activeTab, setActiveTab] = useState(tabKeys[0])
  const tab = GetTabItemFromKey(children, activeTab)

  return (
    <>
      <ul>
        {tabKeys.map(k => (
          <li key={k} onClick={() => setActiveTab(k)}>
            {k}
          </li>
        ))}
      </ul>
      <p>Active tab : {activeTab}</p>
      {tab}
    </>
  )
}

TabNav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export {TabNav}
