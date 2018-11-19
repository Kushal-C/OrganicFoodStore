import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getItemsRequest, getUserProfile, addToCart } from "../actions/index";
import Dashboard from "../components/dashboard/dashboard";

class DashboardContainer extends Component {

  componentWillMount(){
    const { category } = this.props.match.params
    this.props.getItems(category);
  }

  render() {
    if (this.props.login[0] != null && this.props.items != null) {
      return (
        <Dashboard
          firstName={this.props.login[0].firstName}
          lastName={this.props.login[0].lastName}
          getItems={this.props.getItems}
          match={this.props.match}
          getProfile={this.props.getUserProfile}
          item_props={this.props.items}
        />
      );
    }
    return (
      <Dashboard
        firstName={"John"}
        lastName={"Smith"}
        getItems={this.props.getItems}
        getProfile={this.props.getUserProfile}
        match={this.props.match}
        item_props={[
          {
            name: "Loading",
            description: "Loading",
            imageLink:
              "https://i5.walmartimages.ca/images/Large/950/304/6000016950304.jpg",
            cost: 2,
            weight: 1,
            weight_unit: "pound"
          }]}
      />
    );
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
  return bindActionCreators(
    { getItems: getItemsRequest, getUserProfile: getUserProfile},
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
