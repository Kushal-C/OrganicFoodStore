import React, { Component } from "react";

import Order from "../components/order.js";

export default class PastOrders extends Component {
  render() {
    return(
    this.props.orders.map(function(order){
      return (
      <div>
        <Order
          status = {order.status}
          contents = {order.contents}
          total_cost = {order.total_cost}
        ></Order>
      </div>
    )})
    )}
}
