import React, { Component } from "react";
import AdminItem from "./admin_item";

export default class Admin extends Component {

  render() {
    return(
      <div> {JSON.stringify(this.props.items)} </div>
    // <div>
    //   {this.props.items.map(function(item){
    //     return (
    //       <AdminItem name = {item.name} quantity = {item.quantity} updateQuantity = {this.props.updateQuantity} />
    //   )})}
    // </div>
    )
  }

}