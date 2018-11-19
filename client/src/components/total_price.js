import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class TotalPrice extends Component {
  constructor(props){
    super(props);
    this.placeOrder = this.placeOrder.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
  }

  placeOrder() {
    if(this.props.cartItems.length > 0) {
      this.props.placeOrder(this.generateRequestPayload());
    }
  }

  emptyCart() {
    if(this.props.cartItems.items.length > 0) {
      this.props.emptyCart();
    }
  }

  generateRequestPayload() {
    console.log("TOTAL PRICE USER ID:");
    console.log(this.props.profile);
    return {userId: this.props.profile[0].userId};
  }

  render() {
    let price = 0;
    let tax = 0;
    let total_cost=0;

    if(this.props.cartItems.items !== null){
      for (let i = 0; i < this.props.cartItems.length; i++) {
        price += parseInt(this.props.cartItems[i].cost) * this.props.cartItems[i].quantity;
      }
      tax = price * .1;
      total_cost = price + tax;
    }

    return (
      <div className="card" style={{padding:'20px'}}>
        <h4 className="head-title">Total Price</h4>
        <div className="dropdown-divider" />
        <div className="row">
          <div className="col text-left">${price} </div>
          <div className="col text-right">Price</div>
        </div>
        <div className="row">
          <div className="col text-left">${tax} </div>
          <div className="col text-right">Tax</div>
        </div>
        <div className="dropdown-divider" />
        <div className="row">
          <div className="col text-left">${total_cost} </div>
          <div className="col text-right">Totals</div>
        </div>
        <div className="dropdown-divider" />
        <div className="row">
          <div className="col-md-6 text-left">
            <button
              className="btn btn-secondary"
              onClick={this.placeOrder}
            >
              Empty Cart
            </button>
          </div>
          <div className="col-md-6 text-right">
            <button
              className="btn btn-primary"
              onClick={this.placeOrder}
            >
            <Link className="text-white" to="/dashboard/pastorders">Place Order</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
