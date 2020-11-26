import React from 'react'
import {TabItem} from '../components/navigation/TabItem'

const GetTabItemFromKey = (children: any, key: string): React.ReactElement => {
  let tab: any = undefined

  React.Children.map(children, child => {
    if (child.type !== TabItem) {
      throw new Error(
        'Only <TabItem> components should be used inside <TabNav> components',
      )
    }

    const {tabKey} = child.props

    if (!tabKey) {
      throw new Error('Every <TabItem> component should have a tabKey property')
    }

    if (key === tabKey) {
      tab = child
    }
  })

  return tab
}

export {GetTabItemFromKey}
