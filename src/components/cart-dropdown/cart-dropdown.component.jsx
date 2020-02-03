import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'
import { getCartItems } from '../../redux/cart/cart.selectors'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>Check Out</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItems
})

export default connect(mapStateToProps)(CartDropdown)
