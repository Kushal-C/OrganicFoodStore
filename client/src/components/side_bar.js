import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../actions/index";

class Sidebar extends Component {

  logoutReq() {
    console.log("CLICKED LOGOUT");
    logout();
  }

  render() {
    return (
      <div className="col-md-3">
        <ul>
          <Link to="/dashboard/featured" style={{ textDecoration: "none" }}>
            <li onClick={this.props.routeUpdate}>Featured Items</li>
          </Link>
          <Link to="/dashboard/groceries" style={{ textDecoration: "none" }}>
            <li onClick={this.props.routeUpdate}>Groceries</li>
          </Link>
          <Link to="/dashboard/bakery" style={{ textDecoration: "none" }}>
            <li onClick={this.props.routeUpdate}>Bakery</li>
          </Link>
          <Link to="/dashboard/drinks" style={{ textDecoration: "none" }}>
            <li onClick={this.props.routeUpdate}>Drinks</li>
          </Link>
          <Link to="/dashboard/snacks" style={{ textDecoration: "none" }}>
            <li onClick={this.props.routeUpdate}>Snacks</li>
          </Link>
          <Link to="/pastorders" style={{ textDecoration: "none" }}>
            <li>Past Orders</li>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <li>Shopping Cart</li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li onClick={ () => this.logoutReq()}>Sign Out</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
