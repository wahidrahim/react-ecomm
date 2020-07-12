import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { getCartTotalItems } from '../../redux/cart/cart.selectors';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = (props) => (
  <div className="cart-icon" onClick={props.toggleCartDropdown}>
    <ShoppingIcon className="shopping-icon" />
    <div className="item-count">{props.totalItems}</div>
  </div>
);

const mapStateToPtops = createStructuredSelector({
  totalItems: getCartTotalItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToPtops, mapDispatchToProps)(CartIcon);
