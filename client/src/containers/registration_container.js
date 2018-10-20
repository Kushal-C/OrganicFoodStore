import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import RegistrationPage from '../components/sign_in/registration_page';
import {register} from '../actions/index';

class RegistrationContainer extends Component {
    render(){
        return (
            <RegistrationPage/>
        );
    }
}

function mapStateToProps(state) {
    return {
        registrationState: state.register
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ register: register }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationContainer);


