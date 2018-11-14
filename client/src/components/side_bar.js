import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Sidebar extends Component {
  render() {
    return (
      <div className="col-md-3">
        <ul>
          <Link to="/dashboard/featured" style={{ textDecoration: "none" }}>
            <li>Featured Items</li>
          </Link>
          <Link to="/dashboard/groceries" style={{ textDecoration: "none" }}>
            <li>Groceries</li>
          </Link>
          <Link to="/dashboard/bakery" style={{ textDecoration: "none" }}>
            <li>Bakery</li>
          </Link>
          <Link to="/dashboard/drinks" style={{ textDecoration: "none" }}>
            <li>Drinks</li>
          </Link>
          <Link to="/dashboard/snacks" style={{ textDecoration: "none" }}>
            <li>Snacks</li>
          </Link>
          <Link to="/dashboard/utensils" style={{ textDecoration: "none" }}>
            <li>Utensils</li>
          </Link>
          <Link to="/dashboard/medicine" style={{ textDecoration: "none" }}>
            <li>Medicine</li>
          </Link>
          <Link to="/dashboard/assorted" style={{ textDecoration: "none" }}>
            <li>Other</li>
          </Link>
          <Link to="/pastorders" style={{ textDecoration: "none" }}>
            <li>Past Orders</li>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <li>Shopping Cart</li>
          </Link>
        </ul>
      </div>
    );
  }
}
