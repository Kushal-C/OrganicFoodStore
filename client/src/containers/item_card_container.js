import React, { Component } from "react";
import ItemCard from "../components/item_card";

export default class ItemCardContainer extends Component {
  render() {
    return (
      <ItemCard
        addToCart = {this.props.addToCart}
        name={this.props.name}
        description={this.props.description}
        image_link={this.props.image_link}
        cost={this.props.cost}
        weight={this.props.weight}
        weight_unit={this.props.weight_unit}
      />
    );
  }
}
