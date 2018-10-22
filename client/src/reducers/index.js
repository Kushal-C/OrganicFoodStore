import { combineReducers } from "redux";
import LoginReducer from "./login_reducer";
import GetProfileReducer from './get_profile_reducer';
import GetItemsReducer from './get_items_reducer';
import AddToCartReducer from './add_item_reducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  profile: GetProfileReducer,
  items: GetItemsReducer,
  cart: AddToCartReducer
});

export default rootReducer;
