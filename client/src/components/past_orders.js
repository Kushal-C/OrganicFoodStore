import React, { Component } from "react";
import Sidebar from './side_bar.js';
import Order from "../components/order.js";

export default class PastOrders extends Component {
  render() {
    return(
    this.props.orders.map(function(order){
      return (
      <div className="row">
      <Sidebar/>
      <div className="col-md-9">
        <Order
          status = {order.status}
          contents = {order.contents}
          total_cost = {order.total_cost}
        ></Order>
      </div>
      </div>
    )})
    )}
}
