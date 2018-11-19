import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getUserProfile } from "../actions/index";
import TopBar from "../components/dashboard/top_bar";

class TopBarContainer extends Component {

  render() {
    if (this.props.login !== null) {
      return (
        <TopBar
          firstName={this.props.login[0].firstName}
          lastName={this.props.login[0].lastName}
          getProfile={getUserProfile}
        />
      );
    }
    return (
      <TopBar
        firstName={"John"}
        lastName={"Smith"}
        getProfile={this.props.getUserProfile}

      />
    );
  }
}

function mapStateToProps(state) {
  return {
    userProfile: state.profile,
    login: state.login

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getUserProfile: getUserProfile },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBarContainer);