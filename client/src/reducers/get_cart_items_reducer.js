
import { GET_CART_ITEMS_REQUEST , EMPTY_CART_REQUEST} from "../actions/action_constants";

export default function(state = null, action) {
  switch (action.type) {
    case EMPTY_CART_REQUEST:
      return {items: []};
    case GET_CART_ITEMS_REQUEST:
      return action.payload.data;
    default:
      return state;
  }
};
