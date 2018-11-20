import React, { Component } from "react";

export default class CoundownTimer extends Component {
  render() {
    return (
      <div className="card" style={{ width: "207%" }}>
        <div className="row col-md-12" style={{ marginTop:'10px', marginBottom:'10px' }}>
          <div className="col-md-6 text-left">
            Arrival Time: { parseInt(this.props.arrivalTime / 60000) } Minutes
          </div>
          <div className="col-md-6 text-right">
            Order Status: { this.props.orderStatus }
        </div>
      </div>
    </div>
    );
  }
}
