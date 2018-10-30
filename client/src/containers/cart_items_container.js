import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux"
import CartItem from '../components/cart_item';
import {getCartItemsRequest} from '../actions/index';

class CartItemsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <CartItem
          items = {this.props.items}
          cost = {this.props.cost}
          weight = {this.props.weight}
          weight_unit = {this.props.weight_unit}
        ></CartItem>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cost : state.cost,
    weight : state.weight,
    weight_unit : state.weight_unit
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCartItems: getCartItemsRequest }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItemsContainer);