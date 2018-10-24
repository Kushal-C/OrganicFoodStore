import { LOGIN_REQUEST } from "../actions/action_constants";

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      console.log("Got here");
      return action.payload.data;
    default:
      return state;
  }
}
