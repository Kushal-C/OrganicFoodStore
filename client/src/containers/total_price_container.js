import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {emptyCart, placeOrder, addToCart} from "../actions/index";
import TotalPrice from '../components/total_price';

class TotalPriceContainer extends Component {

  render() {
    return(
      <TotalPrice
        cartItems = {this.props.cartItems}
        emptyCart ={this.props.emptyCart}
        profile={this.props.profile}
        placeOrder={this.props.placeOrder}
        addToCart={this.props.addToCart}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    cartItems : state.cartItems,
    profile: state.login
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ emptyCart: emptyCart, placeOrder: placeOrder, addToCart:addToCart }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalPriceContainer);