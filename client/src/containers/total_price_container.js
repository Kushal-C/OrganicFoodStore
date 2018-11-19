import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getCartItemsRequest, emptyCart} from "../actions/index";
import TotalPrice from '../components/total_price';

class TotalPriceContainer extends Component{

  componentDidMount() {
    this.props.getCartItems({cartId : 1});
  }

  render() {
    return(
      <TotalPrice
        emptyCart = {this.props.emptyCart}
        profile = {this.props.login[0]}
        cartItems = {this.props.cartItems}
        price = {this.props.price}
        tax = {this.props.tax}
        total_cost = {this.props.total_cost}
      ></TotalPrice>
    )
  }
}

function mapStateToProps(state) {
  return {
    price : state.price,
    login : state.login,
    cartItems : state.cartItems,
    tax : state.tax,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCartItems: getCartItemsRequest, emptyCart: emptyCart }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalPriceContainer);