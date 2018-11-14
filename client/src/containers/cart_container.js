import React, { Component } from "react";
import Cart from "../components/cart";

class CartContainer extends Component {
  render() {
    return (
      <Cart
        items={[
          {
            name: "Broccoli",
            description: "Flower of Broccoli",
            number: 3,
            cost: 2,
            weight: 1,
            weight_unit: "pound"
          },
          {
            name: "Mango",
            description: "A whole mango",
            number: 2,
            cost: 2,
            weight: 2,
            weight_unit: "pounds"
          }
        ]}
      />
    );
  }
}

export default CartContainer;
