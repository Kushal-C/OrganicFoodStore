import { ADD_TO_CART_REQUEST } from "../actions/action_constants";

export default function (state = null, action) {
    switch (action.type) {
        case ADD_TO_CART_REQUEST:
            return action.payload.data;
        default:
            return state;
    }
}
