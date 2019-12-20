import React from 'react'
import './homepage.styles.scss'

import MenuItem from '../../components/menu-item/menu-item.component'

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <MenuItem title="HATS" />
      <MenuItem title="JACKETS" />
      <MenuItem title="SNEAKERS" />
      <MenuItem title="WOMENS" />
      <MenuItem title="MENS" />
    </div>
  </div>
)

export default HomePage
