

import { REGISTRATION_REQUEST } from "../actions/action_constants";

export default function (state = null, action) {
    switch (action.type) {
        case REGISTRATION_REQUEST:
            console.log("REGSITRATION REQU");
            return action.payload.data;
        default:
            return state;
    }
}
