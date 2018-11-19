import React, { Component } from "react";
import Order from "../components/order.js";

export default class PastOrders extends Component {
  render() {
    return(

    // <div className="row">
    //   <Sidebar/>
      
    //   <div className="row col-md-9" style={{margin:'0px', padding:'0px'}}>
   <div>
        {this.props.orders.map(function(order){
          return (
            <Order
              orderId = {order.orderId}
              status = {order.status}
              contents = {order.contents}
              total_cost = {order.total_cost}
            ></Order>
        )})}
  </div>

    )}
}
