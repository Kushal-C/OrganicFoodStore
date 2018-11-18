import React, { Component } from 'react';

export default class CartItem extends Component{

  displayCart() {
    if(this.props.items) {
    return (
    this.props.items.map(function(item,key){
      return(
        <div key={key}>
          <div className="row mr-2 ml-2" >

            <div className="col-md-6">
              {item.name} x {item.number}
            </div>

            <div className="col-md-6 text-right">
              ${item.cost}
            </div>

            </div>
              <div className="col-md-5 text-right">

              </div>


          <div className="text-center mb-3">
            weight = {item.weight} {item.weight_unit}
          </div>

        </div>
      )
    })
    )}
  }
  render() {
    return(
      <div>
      <h4 className="head-title">Order Details</h4>



       </div>
    )
  }
}