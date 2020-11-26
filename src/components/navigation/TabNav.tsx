import React, {FunctionComponent, useState} from 'react'
import PropTypes, {InferProps} from 'prop-types'
import {useTabs} from '../../hooks/useTabs'

function TabNav({children}: InferProps<typeof TabNav.propTypes>) {
  const {keys, activeTab, setActiveTab, tab} = useTabs(children)

  return (
    <>
      <ul>
        {Array.isArray(keys) &&
          keys.map(k => (
            <li key={k}>
              <button onClick={() => setActiveTab(k)}>{k}</button>
            </li>
          ))}
      </ul>
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
