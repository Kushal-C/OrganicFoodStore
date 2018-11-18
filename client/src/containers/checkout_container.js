import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getCheckoutItemsRequest } from "../actions/index";
import Checkout from "../components/checkout/checkout";

class CheckoutContainer extends Component {
  state = {
    orderId: 1
  };

  componentWillMount() {
    let path_names = this.props.location.pathname.split('/');
    let id = path_names[path_names.length - 1];
    this.setState({orderId: id});
    this.props.checkoutContentsReq({ "userId": this.props.login[0].userId, "transactionId": this.state.orderId });
  }

  render() {
    if(!this.props.checkoutContents) {
      return (
        <div>Loading...</div>
      )
    }
    else {
      return (
        <Checkout checkoutContents={this.props.checkoutContents} />
      );
    }
  }
}

function mapStateToProps(state) {
  return { checkoutContents : state.checkoutContents, login : state.login};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ checkoutContentsReq : getCheckoutItemsRequest }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutContainer);
