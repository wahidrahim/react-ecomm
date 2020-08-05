import React, { createContext, useState, useEffect } from 'react';
import { addItemToCart, removeFromCart, filterFromCart } from './cart.utils';

const usePersistedState = (key, value) => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) || value
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export const CartContext = createContext({
  hidden: true,
  cartItems: [],
  cartItemsCount: 0,
  cartTotal: 0,
  toggleHidden: () => {},
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export function CartProvider({ children }) {
  const [hidden, setHidden] = usePersistedState('hidden', true);
  const [cartItems, setCartItems] = usePersistedState('cartItems', []);
  const [cartItemsCount, setCartItemsCount] = usePersistedState(
    'cartItemsCount',
    0
  );
  const [cartTotal, setCartTotal] = usePersistedState('cartTotal', 0);
  const toggleHidden = () => setHidden(!hidden);
  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) => setCartItems(removeFromCart(cartItems, item));
  const clearFromCart = (item) => setCartItems(filterFromCart(cartItems, item));

  useEffect(() => {
    const totalItems = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    const totalPrice = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    setCartItemsCount(totalItems);
    setCartTotal(totalPrice);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        cartItems,
        cartItemsCount,
        cartTotal,
        toggleHidden,
        addItem,
        removeItem,
        clearFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
