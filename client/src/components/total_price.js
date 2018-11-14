import React, { Component } from "react";
import { placeOrder, emptyCart } from "../actions/index";

export default class TotalPrice extends Component {
  placeOrder(user_id) {
    placeOrder(user_id);
  }

  emptyCart(user_id) {
    emptyCart(user_id);
  }

  render() {
    return (
      <div className="card">
        <h4>Total Price</h4>
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
              onClick={this.emptyCart(this.props.getProfile)}
            >
              {" "}
              Empty Cart{" "}
            </button>
          </div>
          <div className="col text-right">
            <button
              className="btn btn-primary"
              onClick={this.placeOrder(this.props.getProfile)}
            >
              {" "}
              Place order{" "}
            </button>
          </div>
          <div>
            <div className="card">
              <h4 className="head-title">Total Price</h4>
              <div className="ml-3 mb-3">cost = ${this.props.total_cost}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
