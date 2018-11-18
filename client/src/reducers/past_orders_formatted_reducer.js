import { UPDATE_PAST_ORDERS } from "../actions/action_constants";

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_PAST_ORDERS:
    return action.payload.data;
    default:
      return state;
  }
}
