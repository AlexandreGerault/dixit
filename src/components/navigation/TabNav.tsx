import React, {FunctionComponent, useState} from 'react'
import PropTypes, {InferProps} from 'prop-types'
import {useTabs} from '../../hooks/useTabs'

function TabNav({children}: InferProps<typeof TabNav.propTypes>) {
  const {keys, activeTab, setActiveTab, tab} = useTabs(children)

  return (
    <div className="tabs">
      <nav className="tabs__header">
        <ul>
          {Array.isArray(keys) &&
            keys.map(k => (
              <li key={k}>
                <button
                  onClick={() => setActiveTab(k)}
                  className={activeTab === k ? 'selected' : ''}
                >
                  {k}
                </button>
              </li>
            ))}
        </ul>
      </nav>
      <div className="tabs__content">{tab}</div>
    </div>
  )
}

TabNav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export {TabNav}
