import React, { Component } from 'react';
import CartItemContainer from "../containers/cart_items_container"
import TotalPriceContainer from '../containers/total_price_container';

export default class Cart extends Component{
  constructor(props) {
    super(props);
  }

  generateComponents() {
    let items = [];
    for(let i = 0; i < this.props.length; i++) {
      items.push(<CartItemContainer items = {this.props.items}></CartItemContainer>);
    }
    return items;
  }


  render() {
    return(
      <div>
        <div className="row">
          <h1 className="header-primary">Shopping Cart</h1>
        </div>
        <div className="row">
          <div className="col-md-9">
            <div className="card">
              {<CartItemContainer items = {this.props.items}></CartItemContainer>}
            </div>
          </div>
          <div className="col-md-3">
            <TotalPriceContainer items = {this.props.items}></TotalPriceContainer>
          </div>
        </div>
      </div>
    )
  }
}