import React, { Component } from 'react';
import CartItem from './cart_item';

import TotalPriceContainer from '../containers/total_price_container';

class Cart extends Component{
  render() {
    return(
      <div>
        <div className="row">
        
        <div className="row col-md-9" style={{margin:'0px', padding:'0px'}}>
          <h1 className="header-primary shopping-cart col-md-12">Shopping Cart</h1>
          <div className=" row col-md-12" style={{marginLeft:'20px', marginTop:'20px'}}>
          <div className="col-md-6">
          
            <div className="card" style={{padding:'20px'}} >
              <CartItem items = {this.props.items}></CartItem>
            </div>
          </div>
          <div className="col-md-6">
            <TotalPriceContainer price = {this.props.items.price} tax = {this.props.items.tax} total_cost = {this.props.items.total_cost} ></TotalPriceContainer>
          </div>
        </div>
      </div></div>
</div>
    );
  }
}

export default Cart;