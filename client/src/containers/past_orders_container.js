import React, { Component } from "react";
import PastOrders from "../components/past_orders";
import { getPastOrdersRequest, getUserProfile } from "../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class PastOrdersContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataIsReady : false,
      pastOrders : {}
    }
  }

  componentWillMount(){
    this.props.getPastOrders({userId : this.props.login[0].userId});
  }

  transformServerData() {
    let result = {data: []};
    result.data.push ({orderId : this.props.pastOrders[0].transactionId, status : this.props.pastOrders[0].status , contents: [], total_cost: 0});
    for (let i = 0; i < this.props.pastOrders.length; i++) {
      let hasOrderId = false;
      for (let j = 0; j < result.data.length; j++) {
        if(result.data[j].orderId === this.props.pastOrders[i].transactionId) {
          hasOrderId = true;
        }
      }
      if(!hasOrderId) {
        result.data.push({orderId : this.props.pastOrders[i].transactionId, status : this.props.pastOrders[i].status , contents: [], total_cost: 0});
      }
    }

    let res = this.fillContents(result);
    this.setState({ pastOrders : res, dataIsReady : true });

  }

  fillContents(result) {
    for (let i = 0; i < this.props.pastOrders.length; i++) {
      for (let j = 0; j < result.data.length; j++) {
        if(result.data[j].orderId === this.props.pastOrders[i].transactionId) {
          result.data[j].contents.push({
            name: this.props.pastOrders[i].productName,
            quantity: this.props.pastOrders[i].q,
            cost: this.props.pastOrders[i].cost
          });
        }
      }
    }
    return this.calculateTotalCost(result);
  }

  calculateTotalCost(result) {
    for (let i = 0; i < result.data.length; i++) {
      let contentArr = result.data[i].contents;
      let total = 0;
      for(let j = 0; j < contentArr.length; j++) {
        total += contentArr[j].cost;
      }
      result.data[i].total_cost = total;
    }
    return result;
  }

  render() {
    if(!this.props.pastOrders) {
      return (
        <div>Loading...</div>
      )
    }
   else if(!this.state.dataIsReady) {
    this.transformServerData();
    return (
        <div>Loading...</div>
      )
    }
    else {
      return (
        <div>
          <PastOrders orders = {this.state.pastOrders.data}></PastOrders>
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
