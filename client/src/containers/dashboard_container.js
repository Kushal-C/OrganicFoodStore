import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {getItemsRequest, getUserProfile} from '../actions/index';

import Dashboard from "../components/dashboard/dashboard";


class DashboardContainer extends Component {
  render() {
    return <Dashboard getItems={getItemsRequest} getProfile={getUserProfile} />;
  }
}

function mapStateToProps(state) {
  return {
    userProfile: state.profile,
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getItems: getItemsRequest, getUserProfile: getUserProfile }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
