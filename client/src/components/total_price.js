import React, { Component } from 'react';

export default class TotalPrice extends Component{
  render() {
    return(
      <div>
        <div className="card">
          <h4>Total Price</h4>
          cost = ${this.props.total_cost}
        </div>
      </div>
    )
  }
}