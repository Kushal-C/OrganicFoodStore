import React, { Component } from "react";

export default class ItemCard extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{this.props.name}</h4>
          <p class="card-text">{this.props.description}</p>
          <div class="row">
            <div className="col-md-6 text-left">Cost = ${this.props.cost}</div>
            <div className="col-md-6 text-left">
              Weight = {this.props.weight} {this.props.weight_unit}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
