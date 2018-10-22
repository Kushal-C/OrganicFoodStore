import React, { Component } from "react";
import ItemCard from "../components/dashboard/item_card";

export default class ItemCardContainer extends Component {
  render() {
    return (
      <ItemCard
        name={this.props.name}
        description={this.props.description}
        cost={this.props.cost}
        weight={this.props.weight}
        weight_unit={this.props.weight_unit}
      />
    );
  }
}
