import {LOGIN_REQUEST} from '../actions/action_constants';

export default function(state = null, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return action.payload.data;
    default:
      return state;
  }
}
