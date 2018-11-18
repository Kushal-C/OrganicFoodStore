import React, { Component } from "react";
import {Link} from 'react-router-dom';

import SidebarContainer from "../../containers/side_bar_container";
import ItemCardContainer from "../../containers/item_card_container";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  getCategory() {
    console.log("match: " + JSON.stringify(this.props.match.params.category));
    let categoryName = this.props.match.params.category;
    categoryName = categoryName[0].toUpperCase() + categoryName.substring(1, categoryName.length);
    return categoryName;
  }

  render() {

    return (
      <div style={{minWidth:'1200px'}}>
        <div className="row">
          <div className="col-md-6 text-left" style={{marginTop: '10px'}}>
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
          <SidebarContainer match={this.props.match} style={{height:'100%'}}/>
          <div className="row col-md-9" >
          <div className="fetitem col-md-12"> {this.getCategory()}</div>
            {this.props.item_props.map(function(item, index){
              return (
              <ItemCardContainer
                name = {item.name}
                description = {item.description}
                imageLink = {item.imageLink}
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
