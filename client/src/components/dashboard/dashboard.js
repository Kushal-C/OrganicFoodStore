import React, { Component } from "react";
import {Link} from 'react-router-dom';

import Sidebar from "../side_bar";
import ItemCardContainer from "../../containers/item_card_container";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 text-left">
            <h1 className="header-primary">OFS DELIVERY</h1>
          </div>
          <div className="col-md-6 text-right">
            <Link to="/user">
              <div className="dropdown">
                <span className="badge badge-primary">
                  {this.props.firstName + " " + this.props.lastName}
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <Sidebar />
          <div className="col-md-9 text-left">
            {this.props.item_props.map(function(item, index){
              return (
              <ItemCardContainer
                name = {item.name}
                description = {item.description}
                image_link = {item.image_link}
                cost = {item.cost}
                weight = {item.weight}
                weight_unit = {item.weight_unit}
                key={index}/>);
            })}
          </div>
        </div>
      </div>
    );
  }
}
