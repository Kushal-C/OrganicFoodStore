import React, { Component } from "react";
import Dashboard from "../components/dashboard";
import {addToCart} from "../actions/index";

//import { bindActionCreators } from "redux";
//import { connect } from "react-redux";

export default class DashboardContainer extends Component {
  render() {
    //TODO: Replace item_props with a list of properties for each item to be rendered
    return <Dashboard
      item_props = {[
        {
          addToCart: addToCart,
          name:"Broccoli",
          description:"Flower of Broccoli",
          image_link:"https://foodiez.pk/wp-content/uploads/2017/12/broccoli-600x600.jpg",
          cost:2,
          weight:1,
          weight_unit:"pound"
        },
        {
          addToCart: addToCart,
          name:"Mango",
          description:"A single mango",
          image_link:"https://res.cloudinary.com/norgesgruppen/image/upload/c_fill,f_auto,h_439,q_auto,w_780/rqkghle0gmhvbiteusut.png",
          cost:3,
          weight:1,
          weight_unit:"pound"
        }
      ]}
    />;
  }
}
