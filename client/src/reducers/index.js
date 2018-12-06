import { combineReducers } from "redux";
import LoginReducer from "./login_reducer";
import GetProfileReducer from './get_profile_reducer';
import GetItemsReducer from './get_items_reducer';
import GetCheckoutReducer from './get_checkout_reducer';
import GetCartItemsReducer from './get_cart_items_reducer';
import GetPastOrdersReducer from './get_past_orders_reducer';
import GetAdminItemsReducer from './get_admin_items_reducer';
import GetRegistrationResponseReducer from './get_registration_response_reducer';
import PlaceOrderReducer from './place_order_reducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  profile: GetProfileReducer,
  items: GetItemsReducer,
  checkoutContents: GetCheckoutReducer,
  cartItems :  GetCartItemsReducer,
  pastOrders : GetPastOrdersReducer,
  adminItems : GetAdminItemsReducer,
  registrationResponse: GetRegistrationResponseReducer,
  placeOrder: PlaceOrderReducer
});

export default rootReducer;
