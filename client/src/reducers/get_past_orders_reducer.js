import { GET_PAST_ORDERS_REQUEST } from "../actions/action_constants";

export default function (state = null, action) {
    switch (action.type) {
        case GET_PAST_ORDERS_REQUEST:
            return action.payload.data;
        default:
            return state;
    }
}
