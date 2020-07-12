import React from 'react';

import './checkout-item.styles.scss';
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CheckoutItem = ({
  item,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
}) => {
  const { name, imageUrl, quantity, price } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(item)}>
        <span>&#10005;</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
