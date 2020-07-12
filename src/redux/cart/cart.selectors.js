import { createSelector } from 'reselect';

const getCart = (state) => state.cart;

export const getCartHidden = createSelector([getCart], (cart) => cart.hidden);

export const getCartItems = createSelector([getCart], (cart) => cart.cartItems);

export const getCartTotalItems = createSelector([getCartItems], (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity, 0)
);

export const getCartTotalPrice = createSelector(getCartItems, (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
);
