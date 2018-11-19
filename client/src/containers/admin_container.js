import React, { Component } from "react";
import Admin from "../components/admin";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { adminGetItemsReq, adminAddReq } from '../actions/index';

class AdminContainer extends Component {

  componentDidMount() {
    this.props.adminGetItemsReq();
  }

  render() {
    if(JSON.stringify(this.props.adminItems) === "{}") {
      return (
        <div>Loading...</div>
      )
    }
    else {
      return (
        <Admin items = { this.props.adminItems } adminAddReq = { adminGetItemsReq } />
      );
    }
  }
}

function mapStateToProps(state) {
  return { adminItems : state.adminItems };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ adminGetItemsReq: adminGetItemsReq, adminAddReq: adminAddReq }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminContainer);