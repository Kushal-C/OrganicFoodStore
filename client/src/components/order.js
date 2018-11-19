import React, { Component } from "react";
import {Link} from "react-router-dom";

//Takes in a list of properties:
//-Order status
//-List of items containing dictionaries which contain the
//quanitiy of each item ordered, and cost of each item
//-Total price
export default class Order extends Component {
  render() {
    var routingLink = "/dashboard/checkout/view/" + this.props.orderId;
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Order Status - {this.props.status}</h4>
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
