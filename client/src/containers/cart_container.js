import React, { Component } from "react";
import {  getUserProfile } from "../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Cart from "../components/cart";

class CartContainer extends Component {

  render() {
    if(!this.props.cartItems) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <Cart items={this.props.cartItems} profile={this.props.profile} />
    );
  }
}

function mapStateToProps(state) {
  return {
    cartItems: state.cartItems,
    profile: state.profile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ profile: getUserProfile }, dispatch);

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
