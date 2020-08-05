import React, { useContext } from 'react';
import { withRouter } from 'react-router';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';
import { CartContext } from '../../providers/cart.provider';

const CartDropdown = ({ history }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton
        onClick={() => {
          toggleHidden();
          history.push('/checkout');
        }}
      >
        Check Out
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
