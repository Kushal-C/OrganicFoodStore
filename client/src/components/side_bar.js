import React, { Component } from "react";
import {Link} from 'react-router-dom';
export default class Sidebar extends Component {

  render() {
    return <div className="col-md-3">
        <ul>
          <li><Link to="/dashboard/featured">Featured Items</Link></li>
          <li><Link to="/dashboard/groceries">Groceries</Link></li>
          <li><Link to="/dashboard/bakery">Bakery</Link></li>
          <li><Link to="/dashboard/drinks">Drinks</Link></li>
          <li><Link to="/dashboard/snacks">Snacks</Link></li>
          <li><Link to="/dashboard/utensils">Utensils</Link></li>
          <li><Link to="/dashboard/medicine">Medicine</Link></li>
          <li><Link to="/dashboard/assorted">Other</Link></li>
          <li><Link to="/pastorders">Past Orders</Link></li>
          <li><Link to="/cart">Shopping Cart</Link></li>
        </ul>
      </div>;
  }
}
