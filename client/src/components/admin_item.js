import React, { Component } from "react";

export default class AdminItem extends Component {

  render() {
    return (
      <div className="card">
        <div className="text-left">
          <div>{this.props.name}</div>
        </div>
        <div className="text-right">
          <div>{this.props.quantity}</div>
        </div>
      </div>
    );
  }

}