import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class TotalPrice extends Component {
  constructor(props){
    super(props);
    this.placeOrder = this.placeOrder.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
  }

  checkOverWeight() {
    let weight_sum = 0;
    let MAX_WEIGHT = 20;

    for (let i = 0; i < this.props.cartItems.length; i++) {
      weight_sum += this.props.cartItems[i].weight * this.props.cartItems[i].quantity;
    }
    return weight_sum <= MAX_WEIGHT;
  }

  checkEmptyOrder() {
    return this.props.cartItems.length === 0;
  }

  placeOrder() {
    if(this.checkOverWeight()) {
      if(this.props.cartItems) {
        this.props.placeOrder(this.generateRequestPayload());
        alert("Order just placed");
        this.props.emptyCart();
      }
    }
    else {
    }
  }

  emptyCart() {
    if(this.props.cartItems) {
      this.props.emptyCart();
    }
  }

  generateRequestPayload() {
    return {userId: this.props.profile[0].userId};
  }

  handleMaxWeightRouting() {
    if(this.checkEmptyOrder()) {
      return (
        <div>Cart is empty</div>
      )
    }
    else if(this.checkOverWeight()) {
      return (
        <Link className="btn btn-primary" to="/dashboard/pastorders" onClick={this.placeOrder}>
          Place Order
        </Link>
      )
    }
    else {
      return (
        <div>Total weight is greater than 20 Lbs</div>
      )
    }
  }

  render() {
    let price = 0;
    let tax = 0;
    let total_cost=0;

    if(this.props.cartItems.items !== null){
      for (let i = 0; i < this.props.cartItems.length; i++) {
        price += parseFloat(this.props.cartItems[i].cost) * this.props.cartItems[i].quantity;
      }
      tax = price * .1;
      total_cost = price + tax;

    }

    return <div className="card" style={{ padding: "20px" }}>
        <h4 className="head-title">Total Price</h4>
        <div className="row">
          <div className="col text-left">${price.toFixed(2)} </div>
          <div className="col text-right">Price</div>
        </div>
        <div className="row">
          <div className="col text-left">${tax.toFixed(2)} </div>
          <div className="col text-right">Tax</div>
        </div>
        <div className="dropdown-divider" />
        <div className="row">
          <div className="col text-left">${total_cost.toFixed(2)} </div>
          <div className="col text-right">Totals</div>
        </div>
        <div className="dropdown-divider" />
        <div className="row">
          <div className="col-md-6 text-left">
            <button className="btn btn-secondary" onClick={this.emptyCart}>
              Empty Cart
            </button>
          </div>
          <div className="col-md-6 text-right">
            {this.handleMaxWeightRouting()}
          </div>
        </div>
      </div>;
  }
}
