
import { GET_CART_ITEMS_REQUEST , EMPTY_CART_REQUEST} from "../actions/action_constants";

export default function(state = null, action) {
  switch (action.type) {
    case EMPTY_CART_REQUEST:
      console.log("EMTPY CART REQUEST RECEIEVED BY REDUCER");
      return {items: []};
    case GET_CART_ITEMS_REQUEST:
      console.log("GET CART ITEMS REQUEST RECEIVED BY REDUCER");
      return action.payload.data;
    default:
      return state;
  }
};
