import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import UserProfile from "../components/user_profile";
import { updateUserProfile, getUserProfile } from "../actions/index";

class UserProfileContainer extends Component {
  render() {
    return <UserProfile profile={this.props.profile} getProfile={getUserProfile} updateProfile={updateUserProfile} />;
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    updateProfile: state.updateProfile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateUserProfile: updateUserProfile, getUserProfile:getUserProfile}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileContainer);
