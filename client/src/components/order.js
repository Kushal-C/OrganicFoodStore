import React, { Component } from "react";
import {Link} from "react-router-dom";

//Takes in a list of properties:
//-Order status
//-List of items containing dictionaries which contain the
//quanitiy of each item ordered, and cost of each item
//-Total price
export default class Order extends Component {
  render() {
    var routingLink = "/checkout/view/" + this.props.orderId;
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
          <button className="btn btn-primary"><Link className="text-white" to={routingLink}>View Order</Link></button>
        </div>
      </div>
    );
  }
}
