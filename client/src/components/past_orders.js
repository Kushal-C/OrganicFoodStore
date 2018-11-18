import React, { Component } from "react";
import Sidebar from './side_bar.js';
import Order from "../components/order.js";
import TopBarContainer from "../containers/top_bar_container";

export default class PastOrders extends Component {
  render() {
    return(

    <div className="row">
      <Sidebar/>
      
      <div className="row col-md-9" style={{margin:'0px', padding:'0px'}}>
      <TopBarContainer/>
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
