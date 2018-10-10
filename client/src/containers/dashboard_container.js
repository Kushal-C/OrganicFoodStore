import React, { Component } from 'react';
import Dashboard from '../components/dashboard';

// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";

export default class DashboardContainer extends Component {
  render(){
    return(
      <Dashboard></Dashboard>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     sidebar: state.sidebar,
//     name: state.name,
//     main_component: state.main_component
//   };
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators();
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(DashboardContainer);