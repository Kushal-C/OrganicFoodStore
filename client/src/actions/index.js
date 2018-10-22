import axios from "axios";
import {
  LOGIN_REQUEST,
  REGISTRATION_REQUEST,
  GET_ITEMS_REQUEST,
  GET_USER_PROFILE,
  ADD_TO_CART_REQUEST
} from "./action_constants";

export function login(info) {
  const request = axios.post("/api/login", info);
  return {
    type: LOGIN_REQUEST,
    payload: request
  };
}

export function register(info) {
  const request = axios.post("/api/register", info);
  return {
    type: REGISTRATION_REQUEST,
    payload: request
  };
}
export function getItemsRequest(category){
  const request = axios.get(`/api/items/${category}`);
  return {
    type: GET_ITEMS_REQUEST,
    payload: request
  }
}
export function getUserProfile(id){
  const request = axios.get(`/api/profile/${id}`);
  return {
      type:GET_USER_PROFILE,
      payload:request
  }
} 

export function addToCart(info) {
  const request = axios.post("/dashboard/featured", info);
  return {
    type: ADD_TO_CART_REQUEST,
    payload: request
  };
}
