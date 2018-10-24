import React, { Component } from 'react';
import TotalPrice from '../components/total_price';

export default class TotalPriceContainer extends Component {
  constructor(props) {
    super(props);
  }

  calculateCost() {
    let sum = 0;
    this.props.items.map(function(item){
      sum += item.cost;
    });
    return sum;
  }

  render(){
    return(
      <TotalPrice total_cost = {this.calculateCost()}></TotalPrice>
    );
  }
}