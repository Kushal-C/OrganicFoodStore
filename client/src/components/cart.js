import React, { Component } from 'react';
import CartItemContainer from "../containers/cart_items_container"
import TotalPriceContainer from '../containers/total_price_container';

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
            <CartItemContainer
              items = {this.props.items}
              cost = {this.props.cost}
              weight = {this.props.weight}
              weight_unit = {this.props.weight_unit}
            ></CartItemContainer>
          </div>
          <div className="col-md-3">
            <TotalPriceContainer
              price = {this.props.price}
              tax = {this.props.tax}
              total_cost = {this.props.total_cost}
            ></TotalPriceContainer>
          </div>
        </div>
      </div>
    )
  }
}