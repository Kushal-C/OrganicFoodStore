import React, { Component } from 'react';
import CartItemsListContainer from "../containers/cart_items_list_container"
import TotalPrice from '../components/total_price';

export default class Cart extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="row">
          <h1 className="header-primary">Shopping Cart</h1>
        </div>
        <div className="row">
          <div className="col-md-9">
            <CartItemsListContainer
              items = {this.props.items}
              cost = {this.props.cost}
              weight = {this.props.weight}
              weight_unit = {this.props.weight_unit}
            ></CartItemsListContainer>
          </div>
          <div className="col-md-3">
            <TotalPrice
              getProfile = {this.props.getProfile}
              price = {this.props.price}
              tax = {this.props.tax}
              total_cost = {this.props.total_cost}
            ></TotalPrice>
          </div>
        </div>
      </div>
    )
  }
}