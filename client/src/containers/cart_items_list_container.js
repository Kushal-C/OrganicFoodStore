import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux"
import CartItem from '../components/cart_item';
import { getCartItemsRequest } from '../actions/index';

class CartItemsListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className = "card">
        <CartItem
          items = {this.props.items}
        ></CartItem>

        <br></br>
        <div className = "container">
          <div className = "row">
            <div className="col-sm">
              <div className = "row">
                Total Weight
              </div>
              <div className = "row">
                {this.props.weight} {this.props.weight_unit}
              </div>
            </div>
            <div className = "col-sm">
              <div className = "row">
                Price Totals
              </div>
              <div className = "row">
                ${this.props.cost}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    total_cost : state.total_cost,
    total_weight : state.total_weight,
    weight_unit : state.weight_unit
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCartItems: getCartItemsRequest }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItemsListContainer);