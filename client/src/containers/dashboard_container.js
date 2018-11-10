import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {getItemsRequest, getUserProfile} from '../actions/index';
import Dashboard from "../components/dashboard/dashboard";


class DashboardContainer extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  render() {
    //TODO: Replace item_props with a list of properties for each item to be rendered
    if(this.props.login[0] != null){
          return <Dashboard firstName={this.props.login[0].firstName} lastName={this.props.login[0].lastName} getItems={getItemsRequest} getProfile={getUserProfile} item_props={[{ name: "Broccoli", description: "Flower of Broccoli", image_link: "https://i5.walmartimages.ca/images/Large/950/304/6000016950304.jpg", cost: 2, weight: 1, weight_unit: "pound" }, { name: "Mango", description: "A single mango", image_link: "https://res.cloudinary.com/norgesgruppen/image/upload/c_fill,f_auto,h_439,q_auto,w_780/rqkghle0gmhvbiteusut.png", cost: 3, weight: 1, weight_unit: "pound" }]} />;
    }
    return <Dashboard firstName={"John"} lastName={"Smith"} getItems={this.props.getItemsRequest} getProfile={this.props.getUserProfile} item_props={[{ name: "Broccoli", description: "Flower of Broccoli", image_link: "https://i5.walmartimages.ca/images/Large/950/304/6000016950304.jpg", cost: 2, weight: 1, weight_unit: "pound" }, { name: "Mango", description: "A single mango", image_link: "https://res.cloudinary.com/norgesgruppen/image/upload/c_fill,f_auto,h_439,q_auto,w_780/rqkghle0gmhvbiteusut.png", cost: 3, weight: 1, weight_unit: "pound" }]} />;
  }
}

function mapStateToProps(state) {
  return {
    userProfile: state.profile,
    login: state.login,
    items: state.items,
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getItems: getItemsRequest, getUserProfile: getUserProfile}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
