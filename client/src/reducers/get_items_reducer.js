import {GET_ITEMS_REQUEST } from "../actions/action_constants";

export default function (state = [], action) {
    switch (action.type) {
        case GET_ITEMS_REQUEST:
            return action.payload.data;
        default:
            return state;
    }
}
