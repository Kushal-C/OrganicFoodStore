import React, { Component } from "react";
import { adminAddReq } from '../actions/index';

export default class AdminItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newQuantity : 0,
      currentQuantity : parseInt(this.props.quantity,10)
    }

    this.onChange = this.onChange.bind(this);
  }

  update() {
    let req = {
      productId : this.props.productId,
      quantity: this.state.newQuantity
    }

    adminAddReq(req);
    let newVal = Number(this.state.currentQuantity) + Number(this.state.newQuantity);
    if(newVal > -1){
      this.setState({ currentQuantity: newVal });
    }
    else {
      this.setState({ currentQuantity: 0 });
    } 
    
  }

  changeQuantity() {
    if(parseInt(this.state.newQuantity,10) < 0) {
      if( parseInt(this.state.currentQuantity,10) + parseInt(this.state.newQuantity,10) >= 0) {
        this.update();
      }
    }
    else {
      this.update();
    }
  }

  onChange(event) {
    this.setState({ newQuantity : event.target.value });

  }

  render() {
    return (
      <div className="card col-md-3 ml-4" style={{padding:'20px', marginBottom:'20px'}}>
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