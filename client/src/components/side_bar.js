import React, { Component } from "react";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="sidenav">
        <a href="#">Featured Items</a> <br />
        <a href="#">Groceries</a> <br />
        <a href="#">Bakery</a> <br />
        <a href="#">Drinks</a> <br />
        <a href="#">Snacks</a> <br />
        <a href="#">Utensils</a> <br />
        <a href="#">Medicine</a> <br />
        <a href="#">Other</a> <br />
        <a href="#">Past Orders</a> <br />
        <a href="#">Shopping Cart</a> <br />
      </div>
    );
  }
}
