import React, { Component } from "react";
import AdminItem from "./admin_item";

export default class Admin extends Component {

  displayAdminItems() {
    if(this.props.items) {
      return(
        <div>
        <h3>Admin Page</h3>
        <div className="row" style={{padding:'20px'}}>
          {this.props.items.map(function(item){
            return (
              <AdminItem name = {item.productName} quantity = {item.quantity} productId = {item.productId}/>
          )})}
        </div>
        </div>
      )
    }
    else {
      return (
        <div>
        <h3>Admin Page</h3>
        <div className="row" style={{padding:'20px'}}>
          Data Unavailable
        </div>
        </div>
      )
    }
  }

  render() {
    return (
      this.displayAdminItems()
    )
  }

}