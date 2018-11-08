import axios from "axios";
import {
  LOGIN_REQUEST,
  REGISTRATION_REQUEST,
  GET_ITEMS_REQUEST,
  GET_USER_PROFILE,
  ADD_TO_CART_REQUEST,
  UPDATE_USER_PROFILE,
  CHECKOUT_ITEMS
} from "./action_constants";

const route = "http://localhost:5000";

export function login(info) {
  let request = axios.post(route + "/api/login", info);
  return {
    type: LOGIN_REQUEST,
    payload: request
  };
}

export function register(info) {
  const request = axios.post(route + "/api/register", info);
  return {
    type: REGISTRATION_REQUEST,
    payload: request
  };
}
export function getItemsRequest(category){
  const request = axios.get(route + `/api/items/${category}`);
  return {
    type: GET_ITEMS_REQUEST,
    payload: request
  }
}
export function getUserProfile(id){
  const request = axios.get(route + `/api/profile/${id}`);
  return {
      type:GET_USER_PROFILE,
      payload:request
  }
} 

export function updateUserProfile(profile) {
  const request = axios.post(route + "/api/profile", profile);
  return {
    type: UPDATE_USER_PROFILE,
    payload: request
  };
}

export function purchase(userId){
  const request = axios.post(route + "/api/purchase/" + userId);
  return {
    type: CHECKOUT_ITEMS,
    payload: request
  };
}

export function addToCart(item) {
  const request = axios.post(route + "/dashboard/featured", item);
  return {
    type: ADD_TO_CART_REQUEST,
    payload: request
  };
}
