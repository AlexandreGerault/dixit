import {useMemo} from 'react'
import {useState} from 'react'
import {GetTabItemFromKey} from '../functions/GetTabItemFromKey'
import {GetTabKeysFromChildren} from '../functions/GetTabKeysFromChildren'

const useTabs = (children: any) => {
  const keys: string[] = useMemo(() => GetTabKeysFromChildren(children), [
    children,
  ])
  const [activeTab, setActiveTab] = useState(() => keys[0])
  const tab = GetTabItemFromKey(children, activeTab)

  return {keys, activeTab, setActiveTab, tab}
}

export {useTabs}
