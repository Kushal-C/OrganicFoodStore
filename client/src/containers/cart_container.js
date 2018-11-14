import React, { Component } from 'react';
import Cart from '../components/cart';
import { getCartItemsRequest } from '../actions/index';
import { connect } from "react-redux";

class CartContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return(
      <Cart
        //TODO: Need to get the user id rather than profile
        getProfile = {this.props.getProfile}
        price = {this.props.price}
        tax = {this.props.tax}
        items = {getCartItemsRequest}
        total_cost = {this.props.total_cost}
        total_weight = {this.props.total_weight}
        weight_unit = {this.props.weight_unit}
      />
      )
  }
}

function mapStateToProps(state) {
  return {
    price : state.price,
    tax : state.tax,
    items : state.items,
    total_cost : state.total_cost,
    total_weight : state.total_weight,
    weight_unit : state.weight_unit
  };
}

export default connect(
  mapStateToProps
)(CartContainer);
