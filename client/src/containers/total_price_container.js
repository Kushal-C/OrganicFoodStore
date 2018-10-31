import React, { Component } from 'react';
import TotalPrice from '../components/total_price';

class TotalPriceContainer extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <TotalPrice
        //TODO: Need to get the user id rather than profile
        getProfile = {this.props.getProfile}
        price = {this.props.price}
        tax = {this.props.tax}
        total_cost = {this.props.total_cost}
      ></TotalPrice>
    )
  }
}

function mapStateToProps(state) {
  return {
    price = state.price,
    tax = state.tax,
    items = state.items,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCartItems: getCartItemsRequest }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalPriceContainer);