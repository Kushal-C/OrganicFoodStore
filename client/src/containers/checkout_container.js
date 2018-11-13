import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getCheckoutContents } from '../actions/index';
import Checkout from "../components/checkout/checkout";
import axios from "axios";

class CheckoutContainer extends Component {
  state = {
    payload : null
  };

  render() {
    if(this.state.payload) {
      console.log("DATA: " + JSON.stringify(this.state.payload.data));
      return (
        <Checkout checkoutContents = {this.state.payload.data}/>
      );
    }
    else {
      return (
        <div> Loading...</div>
      );
    }
  }

  componentDidMount() {
    axios.post("http://localhost:5000/estimated_routes").then(
      (response) => this.setState({payload: response})
    );
  }
}

function mapStateToProps(state) {
  return { checkoutContents : state.checkoutContents};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ checkoutContents : getCheckoutContents }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutContainer);
