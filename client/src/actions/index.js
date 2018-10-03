import axios from "axios";
import {LOGIN_REQUEST} from './action_constants';

export function login(info){
    const request = axios.post('/api/login', info);
    return {
        type: LOGIN_REQUEST,
        payload:request
    }
}