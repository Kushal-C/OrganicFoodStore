import React, { Component } from "react";
import { adminAddReq } from '../actions/index';

export default class AdminItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newQuantity : ""
    }

    this.onChange = this.onChange.bind(this);
  }

  changeQuantity() {
    let req = {
      productId : this.props.productId,
      quantity: this.state.newQuantity
    }
    adminAddReq(req);
  }

  onChange(event) {
    this.setState({ newQuantity : event.target.value });
  }

  render() {
    return (
      <div className="card">
        <div className="text-left">
          <div>Item Name: {this.props.name}</div>
          <div>Current Quantity: {this.props.quantity}</div>
        </div>
        Quantity to Add:
        <input
          className={"form-control"}
          value={this.props.value}
          onChange={this.onChange}
          type={this.props.type}
          name={this.props.name}
          required
        />
        <button
          class="btn btn-primary float-right"
          onClick={() => this.changeQuantity()}
        >
          Update Quantity
        </button>
      </div>
    );
  }

}