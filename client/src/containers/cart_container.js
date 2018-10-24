import React, { Component } from 'react'
import Cart from '../components/cart'

export default class CartContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <Cart items = {this.props.items}></Cart>
      </div>
    );
  }
}