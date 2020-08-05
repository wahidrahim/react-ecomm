import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { getCartTotalItems } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';
import { CartContext } from '../../providers/cart.provider';

const CartIcon = (props) => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <div className="item-count">{cartItemsCount}</div>
    </div>
  );
};

const mapStateToPtops = createStructuredSelector({
  totalItems: getCartTotalItems,
});

export default connect(mapStateToPtops)(CartIcon);
