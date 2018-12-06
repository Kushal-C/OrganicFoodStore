
import {
  GET_CART_ITEMS_REQUEST,
  EMPTY_CART_REQUEST,
  ADD_TO_CART_REQUEST
} from "../actions/action_constants";

export default function(state = [], action) {
  switch (action.type) {
    case EMPTY_CART_REQUEST:
      return [];
    case GET_CART_ITEMS_REQUEST:
      return action.payload.data;
    case ADD_TO_CART_REQUEST:
      let arr = [...state];
      arr.push(action.payload);
      return arr;
    default:
      return state;
  }
};
