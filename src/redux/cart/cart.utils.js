export const addItemToCart = (cartItems, item) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === item.id)

  if (existingItem) {
    return cartItems.map(cartItem => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1
        }
      }
      return cartItem
    })
  }

  return [...cartItems, { ...item, quantity: 1 }]
}

export const removeFromCart = (cartItems, item) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === item.id)

  if (existingItem.quantity > 1) {
    return cartItems.map(cartItem => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1
        }
      }
      return cartItem
    })
  }

  return cartItems.filter(cartItem => cartItem.id !== item.id)
}
