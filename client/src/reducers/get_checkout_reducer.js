import { GET_CHECKOUT_CONTENTS_REQUEST } from "../actions/action_constants";

export default function(state = null, action) {
  switch (action.type) {
    case GET_CHECKOUT_CONTENTS_REQUEST:
      return action.payload.data;
    default:
      return state;
  }
};
