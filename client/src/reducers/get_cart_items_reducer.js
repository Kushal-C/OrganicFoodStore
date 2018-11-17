
import { GET_CART_ITEMS_REQUEST } from "../actions/action_constants";

export default function(state = null, action) {
  switch (action.type) {
    case GET_CART_ITEMS_REQUEST:
      return action.payload.data;
    default:
      return state;
  }
};
