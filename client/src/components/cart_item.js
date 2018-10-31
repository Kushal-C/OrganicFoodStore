import React, { Component } from 'react';

export default class CartItemsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
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
              <div className = "row">
                <div className="col-md-6 text-left">
                  Wt.   {item.weight} {item.weight_unit}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}