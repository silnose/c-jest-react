import { ADD_TO_CART, REMOVE_FROM_CART } from '../types/actionsTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((items) => items.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;