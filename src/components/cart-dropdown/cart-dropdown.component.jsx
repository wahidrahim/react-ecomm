import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { getCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, toggleCartDropdown }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton
      onClick={() => {
        toggleCartDropdown();
        history.push('/checkout');
      }}
    >
      Check Out
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
