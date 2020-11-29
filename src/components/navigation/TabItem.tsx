import React, {FunctionComponent} from 'react'

type TabItemProps = {
  tabKey: string
}

const TabItem: FunctionComponent<TabItemProps> = ({tabKey, children}) => {
  return <div id={tabKey}>{children}</div>
}

export {TabItem}
