import React, { Component } from 'react';

export default class CartItem extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="card">
        {this.props.items.map(function(item){
          return(
            <div>
              <div className="row">
                <div className="col-md-6 text-left">
                {item.number} X {item.name}
                </div>
                <div className="col-md-6 text-right">
                ${item.cost}
                </div>
              </div>
              <row>
                <div className="col-md-6 text-left">
                  Wt.   {item.weight} {item.weight_unit}
                </div>
              </row>
            </div>
          )
        })}
        <br></br>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div class = "row">
                Total Weight
              </div>
              <div class = "row">
                {this.props.weight} {this.props.weight_unit}
              </div>
            </div>
            <div class="col-sm">
              <div class = "row">
                Price Totals
              </div>
              <div class = "row">
                ${this.props.cost}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}