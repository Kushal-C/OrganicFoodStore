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
      <div className="card col-md-4 ml-4" style={{padding:'20px', marginBottom:'20px'}}>
        <div className="card-body">
          <h4 className="card-title">Order - {this.props.orderId}</h4>
          <div class="dropdown-divider" />
          <h5>{this.props.status}</h5>
          <div class="dropdown-divider" />
          {this.props.contents.map(function(item, key){
            return(
              <div key={key}>{item.name} x{item.quantity} Cost: ${item.cost}</div>
            )
          })}
          <h5>Total Cost: ${this.props.total_cost}</h5>
          <button className="btn btn-primary"><Link className="text-white" to={routingLink}>View Order</Link></button>
        </div>
      </div>
    );
  }
}
