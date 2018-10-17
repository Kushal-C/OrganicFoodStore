import axios from "axios";
import {
  LOGIN_REQUEST,
  REGISTRATION_REQUEST,
  FEATURED_ITEMS_REQUEST
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
