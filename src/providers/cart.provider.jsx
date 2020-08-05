import React, { createContext, useState, useEffect } from 'react';
import { addItemToCart, removeFromCart } from './cart.utils';

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
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const toggleHidden = () => setHidden(!hidden);
  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) => setCartItems(removeFromCart(cartItems, item));
  const clearFromCart = (item) =>
    setCartItems(cartItems.filter(({ id }) => id !== item.id));

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
