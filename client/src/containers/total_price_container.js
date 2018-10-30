import React, { Component } from 'react';
import TotalPrice from '../components/total_price';

export default class TotalPriceContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <TotalPrice
        price = {this.props.price}
        tax = {this.props.tax}
        total_cost = {this.props.total_cost}
      ></TotalPrice>
    );
  }
}