import React, { useContext } from 'react';

import './checkout.syles.scss';
import CheckoutItem from '@components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '@components/stripe-button/stripe-button.component';
import { CartContext } from '../../providers/cart.provider';

const CheckoutPage = ({ total }) => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
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
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
      <StripeCheckoutButton price={cartTotal} />
    </div>
  );
};

export default CheckoutPage;
