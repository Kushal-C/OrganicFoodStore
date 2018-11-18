import React, { Component } from "react";
//import {Link} from 'react-router-dom';

import SidebarContainer from "../../containers/side_bar_container";
import ItemCardContainer from "../../containers/item_card_container";
import TopBar from "../../containers/top_bar_container";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  render() {

    let categoryString = this.props.match.params.category;
    categoryString = categoryString[0].toUpperCase() + categoryString.substring(1, categoryString.length);
console.log("CATEGORY: " + this.props.match.params.category);
    return (
      
      <div style={{minWidth:'1200px'}}>
      <div className="row">
        <SidebarContainer match={this.props.match} style={{height:'100%'}}/>
          <div className="row col-md-9" style={{margin:'0px', padding:'0px'}} >
            <TopBar />
            <div className="catitem col-md-12"> {categoryString}</div>
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
