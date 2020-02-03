import React from 'react'

import './checkout.syles.scss'
import { createStructuredSelector } from 'reselect'
import {
  getCartItems,
  getCartTotalPrice
} from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux'

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(item => (
      <span>{item.name}</span>
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItems,
  total: getCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage)
