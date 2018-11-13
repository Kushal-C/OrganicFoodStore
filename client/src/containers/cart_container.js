import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {purchase} from '../actions/index';

import Cart from '../components/cart';

class CartContainer extends Component {
    render() {
        return (
            <div>
                <Cart items={this.props.items} profile={this.props.login}></Cart>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        login: state.login,
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ purchase:purchase }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartContainer);
