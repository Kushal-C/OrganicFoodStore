import { combineReducers } from "redux";
import LoginReducer from "./login_reducer";
import GetProfileReducer from './get_profile_reducer';
import GetItemsReducer from './get_items_reducer';
import AddToCartReducer from './add_item_reducer';
import UpdateProfileReducer from './update_profile_reducer';
import GetCheckoutReducer from './get_checkout_reducer';
import GetCartItemsReducer from './get_cart_items_reducer';
import GetPastOrdersReducer from './get_past_orders_reducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  profile: GetProfileReducer,
  items: GetItemsReducer,
  cart: AddToCartReducer,
  updateProfile: UpdateProfileReducer,
  checkoutContents: GetCheckoutReducer,
  cartItems : GetCartItemsReducer,
  pastOrders : GetPastOrdersReducer,
});

export default rootReducer;
