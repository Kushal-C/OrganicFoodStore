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
    if (this.props.login !== null && this.props.items !== null) {
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
    else {
      setTimeout(() => {
        this.props.history.push('/');
      }, 3000)
      return (
        <div>Loading</div>
      );
    }
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
