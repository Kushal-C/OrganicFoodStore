import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addToCart } from '../actions/index';
import ItemCard from "../components/dashboard/item_card";

class ItemCardContainer extends Component {
  render() {
    return (
      <ItemCard
        addToCart={this.props.addToCart}
        name={this.props.name}
        description={this.props.description}
        imageLink={this.props.imageLink}
        cost={this.props.cost}
        weight={this.props.weight}
        weight_unit={this.props.weight_unit}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart: addToCart }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCardContainer);
