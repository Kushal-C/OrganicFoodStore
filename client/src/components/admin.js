import React, { Component } from "react";
import AdminItem from "./admin_item";

export default class Admin extends Component {

  render() {
    return(
      <div>
        {this.props.items.map(function(item){
          return (
            <AdminItem name = {item.productName} quantity = {item.quantity} productId = {item.productId} />
        )})}
      </div>
    )
  }

}