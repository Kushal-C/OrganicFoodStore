import React, { Component } from "react";
import Sidebar from './side_bar.js';
import Order from "../components/order.js";

export default class PastOrders extends Component {
  render() {
    return(

    <div className="row">
      <Sidebar/>
      <div className="col-md-8">
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
</div>
    )}
}
