import React, { Component } from "react";
import PastOrders from "../components/past_orders";
import { getPastOrdersRequest, getUserProfile } from "../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class PastOrdersContainer extends Component {

  componentWillMount(){
    this.props.getPastOrders({userId : this.props.login[0].userId});
  }

  render() {

    if(!this.props.pastOrders) {
      return (
        <div>Loading...</div>
      )
    }
    else {
      return (
        <div>
          <PastOrders orders = {this.props.pastOrders.data}></PastOrders>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    pastOrders: state.pastOrders,
    login: state.login,
    profile: state.profile,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPastOrders: getPastOrdersRequest, getUserProfile: getUserProfile }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PastOrdersContainer);
