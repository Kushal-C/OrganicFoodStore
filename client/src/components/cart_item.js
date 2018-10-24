import React, { Component } from 'react';

export default class CartItem extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <row>
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
                weight = {item.weight} {item.weight_unit}
              </div>
            </row>
            </div>
            )
          })}
        </row>
       </div>
    )
  }
}