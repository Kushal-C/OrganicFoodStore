import React, { Component } from "react";
import Sidebar from './side_bar.js';
import Order from "../components/order.js";

export default class PastOrders extends Component {
  render() {
    console.log("ORDERS: " + JSON.stringify(this.props));
    return(

    <div className="row">
    {this.props.orders.map(function(order){
      return (

      <div className="col-md-12" style={{marginTop:'12px'}}>
        <Order
          orderId = {order.orderId}
          status = {order.status}
          contents = {order.contents}
          total_cost = {order.total_cost}
        ></Order>
      </div>

    )})}
</div>
    )}
}
