import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getCheckoutContents } from '../actions/index';
import Checkout from "../components/checkout/checkout";

class CheckoutContainer extends Component {
  render() {
    return (
      <Checkout checkoutContents = {this.props.checkoutContents}/>
    );
  }
}

function mapStateToProps(state) {
  return { checkoutContents : state.getCheckoutContents};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCheckoutContents : getCheckoutContents }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutContainer);











