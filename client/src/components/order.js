import React, { Component } from "react";

//Takes in a list of properties:
//-Order status
//-List of items containing dictionaries which contain the
//quanitiy of each item ordered, and cost of each item
//-Total price
export default class Order extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Order Status - {this.props.status}</h4>
          {this.props.contents.map(function(item){
            return(
              <div >{item.name} x{item.quantity} Cost: ${item.cost}</div>
            )
          })}
          <h5>Total Cost: ${this.props.total_cost}</h5>
        </div>
      </div>
    );
  }
}
