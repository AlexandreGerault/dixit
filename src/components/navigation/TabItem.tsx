import React, {FunctionComponent} from 'react'
import PropTypes, {InferProps} from 'prop-types'

function TabItem({tabKey, children}: InferProps<typeof TabItem.propTypes>) {
  return <div id={tabKey}>{children}</div>
}

TabItem.propTypes = {
  tabKey: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
}

export {TabItem}
