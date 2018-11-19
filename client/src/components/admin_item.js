import React, { Component } from "react";

export default class AdminItem extends Component {
  render() {
    return (
      <div className="card">
        <div className="text-left">
          <div>{this.props.name}</div>
          <div>Left</div>
        </div>
        <div className="text-right">
          <div>{this.props.quantity}</div>
          <div>Right</div>
          <div className="col text-right">
          <button
            className="btn btn-primary"
            onClick={() =>this.props.updateQuantity()}
          >
            Update Quantity
          </button>
        </div>
        </div>
      </div>
    );
  }

}