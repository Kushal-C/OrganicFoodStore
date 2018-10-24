import React, { Component } from 'react';
import CartItem from '../components/cart_item';

export default class CartItemsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <CartItem items = {this.props.items}></CartItem>
      </div>
    )
  }
}