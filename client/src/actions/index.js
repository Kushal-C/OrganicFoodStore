import axios from "axios";

export function getItems(){
    axios.get("/api/hello").then(function(response){
        console.log(response);
    });
}