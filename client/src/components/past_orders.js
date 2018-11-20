import React, { Component } from "react";
import Order from "../components/order.js";

export default class PastOrders extends Component {

  renderPastOrders() {
    if(this.props.orders) {
      return(
        this.props.orders.reverse().map(function(order, key){
          return (
          <Order key={key}
            orderId = {order.orderId}
            status = {order.status}
            contents = {order.contents}
            total_cost = {order.total_cost}
          ></Order>
        )})
      )
    }
   else {
     return (
       <div>Could not render past orders</div>
     )
   }
  }

  render() {
    return(
      <div className = "row">
        {this.renderPastOrders()}
      </div>
    )}
}
