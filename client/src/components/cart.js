import React, { Component } from 'react';
import CartItem from './cart_item';
import TotalPrice from './total_price';

class Cart extends Component{

  generateComponents() {
    let items = [];
    for(let i = 0; i < this.props.length; i++) {
      items.push(<CartItem items = {this.props.items}></CartItem>);
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
              {<CartItem items = {this.props.items}></CartItem>}
            </div>
          </div>
          <div className="col-md-3">
            <TotalPrice items = {this.props.items}></TotalPrice>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;