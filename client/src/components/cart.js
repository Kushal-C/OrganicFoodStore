import React, { Component } from 'react';
import CartItem from './cart_item';
import TotalPriceContainer from '../containers/total_price_container';

class Cart extends Component{

  generateComponents() {
    let items = [];
    for (var index in this.props.items.items) {
      items.push({index : this.props.items.items[index]});
    };

    return items;
  }

  render() {
    console.log("Items: " + JSON.stringify(this.props.items.items));
    return(
      <div>
        <div className="row" >
          <div className="col-md-12">
            <div className="card">
              <CartItem items = {this.props.items.items}></CartItem>
            </div>
          </div>
          <div className="col-md-8" style={{marginTop:'20px'}}>
            <TotalPriceContainer price = {this.props.items.price} tax = {this.props.items.tax} total_cost = {this.props.items.total_cost} ></TotalPriceContainer>
          </div>
        </div>
      </div>

    );
  }
}

export default Cart;