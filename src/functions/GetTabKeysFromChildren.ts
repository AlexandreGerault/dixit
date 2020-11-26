import React from 'react'
import {TabItem} from '../components/navigation/TabItem'

const GetTabKeysFromChildren = (children: any): string[] => {
  const keys: string[] = []
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
    if (keys.includes(tabKey)) {
      throw new Error('<TabNav> Component cannot handle duplicated keys')
    }

    keys.push(tabKey)
  })

  return keys
}

export {GetTabKeysFromChildren}
