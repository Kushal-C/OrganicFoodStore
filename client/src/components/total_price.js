import React, { Component } from 'react';
import { placeOrder } from '../actions/index';
import { emptyCart} from '../actions/index';

export default class TotalPrice extends Component{
  constructor(props) {
    super(props);
  }

  emptyCart() {
    emptyCart();
  }

  placeOrder() {
    placeOrder();
  }

  render() {
    return(
      <div>
        <div className="card">
          <h4>Total Price</h4>
          <div class="dropdown-divider"></div>
          <div class = "row">
            <div class = "col text-left">${this.props.price} </div>
            <div class = "col text-right">Price</div>
          </div>
          <div class = "row">
            <div class = "col text-left">${this.props.tax} </div>
            <div class = "col text-right">Tax</div>
          </div>
          <div class = "dropdown-divider"></div>
          <div class = "row">
            <div class = "col text-left">${this.props.total_cost} </div>
            <div class = "col text-right">Totals</div>
          </div>
          <div class = "dropdown-divider"></div>
          <div class = "row">
            <div class = "col text-left">
              <button className="btn btn-secondary" onClick = {this.emptyCart} > Empty Cart </button>
            </div>
            <div class = "col text-right">
              <button className="btn btn-primary" onClick = {this.placeOrder} > Place order </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}