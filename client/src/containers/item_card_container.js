import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addToCart } from '../actions/index';
import ItemCard from "../components/dashboard/item_card";

class ItemCardContainer extends Component {
  render() {
    if(this.props.login === null){
      return (
        <ItemCard
          id={0}
          addToCart={this.props.addToCart}
          productName={this.props.productName}
          description={this.props.description}
          imageLink={this.props.imageLink}
          cost={this.props.cost}
          weight={this.props.weight}
          weight_unit={this.props.weight_unit}
          productID={this.props.productID}
        />
      );
    }
    return (
      <ItemCard
        id={this.props.login[0].userId}
        addToCart={this.props.addToCart}
        productName={this.props.productName}
        description={this.props.description}
        imageLink={this.props.imageLink}
        cost={this.props.cost}
        weight={this.props.weight}
        weight_unit={this.props.weight_unit}
        productID={this.props.productID}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    items: state.items,
    login: state.login
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart: addToCart }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCardContainer);
