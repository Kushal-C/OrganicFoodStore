import React, { Component } from 'react';
import CartItem from './cart_item';
import TotalPrice from './total_price';
import TopBar from "../containers/top_bar_container";
import SidebarContainer from "../containers/side_bar_container";


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
        <div className="row">
          
          {/* <SidebarContainer/> */}
        
        <div className="row col-md-9" style={{margin:'0px', padding:'0px'}}>
          {/* <TopBar/> */}
          <h1 className="header-primary shopping-cart col-md-12">Shopping Cart</h1>
          <div className="col-md-6">
          
            <div className="card">
              {<CartItem items = {this.props.items.items}></CartItem>}
            </div>
          </div>
          <div className="col-md-6">
            <TotalPrice price = {this.props.items.price} tax = {this.props.items.tax} total_cost = {this.props.items.total_cost} ></TotalPrice>
          </div>
        </div>
      </div>
</div>
    );
  }
}

export default Cart;