import React, { Component } from 'react';

export default class TotalPrice extends Component{
  render() {
    return(
      <div>
        <div className="card">
          <h4 className="head-title">Total Price</h4>
          <div className="ml-3 mb-3">cost = ${this.props.total_cost}</div>
        </div>
      </div>
    )
  }
}