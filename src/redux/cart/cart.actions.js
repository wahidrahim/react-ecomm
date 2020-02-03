import { CartActionTypes } from './cart.types'

export const toggleCartDropdown = () => ({
  type: CartActionTypes.TOGGLE_CART_DROPDOWN
})

export const addItemToCart = item => ({
  type: CartActionTypes.ADD_TO_CART,
  item
})

export const removeItemFromCart = item => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  item
})
