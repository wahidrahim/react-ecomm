import React from 'react'
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selector'

import './collection.styles.scss'

const CollectionPage = props => (
  <div className="collection-page">
    {console.log(props)}
    <h2>{props.match.params.collectionId}</h2>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
