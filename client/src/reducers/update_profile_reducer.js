import { UPDATE_USER_PROFILE } from "../actions/action_constants";

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_USER_PROFILE:
      return action.payload.data;
    default:
      return state;
  }
}
