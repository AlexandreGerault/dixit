import React, {FunctionComponent} from 'react'
import {useTabs} from '../../hooks/useTabs'

const TabNav: FunctionComponent<{}> = ({children}) => {
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

export {TabNav}
