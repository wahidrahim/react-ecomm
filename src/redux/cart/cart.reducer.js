import CartActionTypes from './cart.types'
import { addItemToCart, removeFromCart } from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.item)
      }
    case CartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: removeFromCart(state.cartItems, action.item)
      }
    case CartActionTypes.CLEAR_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.item.id)
      }
    default:
      return state
  }
}

export default cartReducer
