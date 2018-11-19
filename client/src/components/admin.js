import React, { Component } from "react";
import AdminItem from "./admin_item";

export default class Admin extends Component {

  renderItems() {
    this.props.items.map(function(item){
      return (
        <AdminItem name = {item.name} quantity = {item.quantity} updateQuantity = {this.props.updateQuantity} />
    )})
  }

  render() {
    return this.renderItems();
  }
}