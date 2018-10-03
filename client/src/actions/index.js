import axios from "axios";

export function getItems(){
    axios.get("/api/login").then(function(response){
        console.log(response);
    });
}

export function sendUserLogin(route, loginInfo) {
    axios.post(route, loginInfo);
}