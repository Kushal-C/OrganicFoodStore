import React, { Component } from "react";
import { placeOrder } from "../actions/index";

export default class TotalPrice extends Component {
  placeOrder() {
    if(this.props.cartItems.items.length > 0) {
      placeOrder(this.generateRequestPayload());
    }
  }

  emptyCart() {
    if(this.props.cartItems.items.length > 0) {
      this.props.emptyCart();
    }
  }

  generateRequestPayload() {
    let orderList = [];
    for(let currentItem in this.props.cartItems.items) {
      orderList.push(
        {
          productId : this.props.cartItems.items[currentItem].productId,
          quantity : this.props.cartItems.items[currentItem].number,
          userId : this.props.profile.userId
        }
      )
    }
    let ret = {items: orderList};
    console.log("Ret: " + JSON.stringify(ret));
    return ret;
  }

  render() {
    return (
      <div className="card">
        <h4 className="head-title">Total Price</h4>
        <div className="dropdown-divider" />
        <div className="row">
          <div className="col text-left">${this.props.price} </div>
          <div className="col text-right">Price</div>
        </div>
        <div className="row">
          <div className="col text-left">${this.props.tax} </div>
          <div className="col text-right">Tax</div>
        </div>
        <div className="dropdown-divider" />
        <div className="row">
          <div className="col text-left">${this.props.total_cost} </div>
          <div className="col text-right">Totals</div>
        </div>
        <div className="dropdown-divider" />
        <div className="row">
          <div className="col text-left">
            <button
              className="btn btn-secondary"
              onClick={() => this.emptyCart()}
            >
              Empty Cart
            </button>
          </div>
          <div className="col text-right">
            <button
              className="btn btn-primary"
              onClick={() =>this.placeOrder()}
            >
            Place order
            </button>
          </div>
        </div>
      </div>
    );
  }
}
