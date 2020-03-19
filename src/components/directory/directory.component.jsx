import React from 'react'
import { connect } from 'react-redux'

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...sectionProps }) => {
      return <MenuItem key={id} {...sectionProps} />
    })}
  </div>
)

const mapStateToProps = state => {
  console.log(state)
  return { sections: state.directory.sections }
}

export default connect(mapStateToProps)(Directory)
