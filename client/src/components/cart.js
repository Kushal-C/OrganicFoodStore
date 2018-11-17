import React, { Component } from 'react';
import CartItem from './cart_item';
import TotalPrice from './total_price';

class Cart extends Component{

  generateComponents() {
    let items = [];
    for (var index in this.props.items.items) {
      items.push({index : this.props.items.items[index]});
    };

    return items;
  }

  render() {
    return(
      <div>
        <div className="row">
          <h1 className="header-primary shopping-cart">Shopping Cart</h1>
        </div>
        <div className="row" style={{margin:'20px'}}>

          <div className="col-md-3">
            <div className="card">
              {<CartItem items = {this.props.items.items}></CartItem>}
            </div>
          </div>
          <div className="col-md-3">
            <TotalPrice price = {this.props.items.price} tax = {this.props.items.tax} total_cost = {this.props.items.total_cost} ></TotalPrice>
          </div>
        </div>
      </div>

    );
  }
}

export default Cart;