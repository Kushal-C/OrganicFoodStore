import React, { Component } from "react";
import { getCartItemsRequest, getUserProfile } from "../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Cart from "../components/cart";

class CartContainer extends Component {

  componentWillMount(){
    this.props.getCartItems({cartId : 1});
    // this.props.getUserProfile();
  }

  render() {
    if(!this.props.cartItems) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <Cart items={this.props.cartItems} />
    );
  }
}

function mapStateToProps(state) {
  return {
    cartItems: state.cartItems,
    profile: state.profile,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCartItems: getCartItemsRequest, profile: getUserProfile }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
