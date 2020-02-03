import React from 'react'

import './checkout-item.styles.scss'
import { removeItemFromCart } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'

const CheckoutItem = ({ item, removeItemFromCart }) => {
  const { name, imageUrl, quantity, price } = item

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow">&#10094;</span>
        {quantity}
        <span className="arrow">&#10095;</span>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItemFromCart(item)}>
        <span>&#10005;</span>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: item => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
