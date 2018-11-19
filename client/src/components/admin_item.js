import React, { Component } from "react";
import { adminAddReq } from '../actions/index';

export default class AdminItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newQuantity : "",
      currentQuantity : this.props.quantity
    }

    this.onChange = this.onChange.bind(this);
  }

  changeQuantity() {
    let req = {
      productId : this.props.productId,
      quantity: this.state.newQuantity
    }

    adminAddReq(req);
    let newVal = Number(this.state.currentQuantity) + Number(this.state.newQuantity);
    this.setState({currentQuantity : newVal});
  }

  onChange(event) {
    this.setState({ newQuantity : event.target.value });
  }

  render() {
    return (
      <div className="card">
        <div className="text-left">
          <div>Item Name: {this.props.name}</div>
          <div>Current Quantity: {this.state.currentQuantity}</div>
        </div>
        Quantity to Add:
        <input
          className={"form-control"}
          value={this.props.value}
          onChange={this.onChange}
          type="number"
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