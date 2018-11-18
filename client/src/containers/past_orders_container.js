import React, { Component } from "react";
import PastOrders from "../components/past_orders";
import { getPastOrdersRequest, getUserProfile, updatePastOrders } from "../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class PastOrdersContainer extends Component {

  componentWillMount(){
    this.props.getPastOrders({userId : this.props.login[0].userId});
    let res = this.transformServerData();
    this.props.updatePastOrders(res);
  }

  transformServerData() {
    let result = {data: []};
    result.data.push ({orderId : this.props.pastOrders[0].transactionId, status : this.props.pastOrders[0].status , contents: [], total_cost: 0});
    for (let i = 0; i < this.props.pastOrders.length; i++) {
      // console.log("res: " + JSON.stringify(result));
      //Check if this.props.pastOrders[i].transactionId is in result.data[i]
      let hasOrderId = false;
      for (let j = 0; j < result.data.length; j++) {
        // console.log("result.data[j].cartId: " + result.data[j].orderId + " this.props.pastOrders[i].transactionId: " + this.props.pastOrders[i].transactionId);
        if(result.data[j].orderId == this.props.pastOrders[i].transactionId) {
          hasOrderId = true;
        }
      }
      if(!hasOrderId) {
        result.data.push({orderId : this.props.pastOrders[i].transactionId, status : this.props.pastOrders[i].status , contents: [], total_cost: 0});
      }
    }
    // console.log("res: " + JSON.stringify(result));
    return this.fillContents(result);
  }

  fillContents(result) {
    for (let i = 0; i < this.props.pastOrders.length; i++) {
      for (let j = 0; j < result.data.length; j++) {
        if(result.data[j].orderId == this.props.pastOrders[i].transactionId) {
          result.data[j].contents.push({
            name: this.props.pastOrders[i].productName,
            quantity: this.props.pastOrders[i].q,
            cost: this.props.pastOrders[i].cost
          });
        }
      }
    }
    // console.log("RESULT: " + JSON.stringify(result));
    this.calculateTotalCost(result);
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
    console.log("RESULT: " + JSON.stringify(result));
    return result;
  }

  fetchOrderContents() {
    for (let i = 0; i < this.props.pastOrders.length; i++) {
      {
        console.log(this.props.pastOrders[i].transactionId);
        console.log(this.props.pastOrders[i].cartId);
        console.log(this.props.pastOrders[i].status);
        console.log(this.props.pastOrders[i].productName);
        console.log(this.props.pastOrders[i].q);
        console.log(this.props.pastOrders[i].cost);
      }
    }
  }

  render() {
    if(!this.props.pastOrderFormatted) {
      return (
        <div>Loading...</div>
      )
    }
    else {
      return (
        <div>
          <PastOrders orders = {this.props.pastOrdersFormatted}></PastOrders>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    pastOrdersFormatted : state.pastOrderFormatted,
    pastOrders: state.pastOrders,
    login: state.login,
    profile: state.profile,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPastOrders: getPastOrdersRequest, getUserProfile: getUserProfile, updatePastOrders : updatePastOrders}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PastOrdersContainer);
