import React, { Component } from "react";
import Sidebar from "./side_bar";
import ItemCardContainer from "../containers/item_card_container";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
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
            <div class="dropdown">
              <span class="badge badge-primary">John Smith</span>
            </div>
          </div>
        </div>
        <div className="row">
          <Sidebar val="Side bar goes here" />
          <div className="col-md-6 text-left">
            <ItemCardContainer
              name="Broccoli"
              description="Flower of Broccoli"
              cost={2}
              weight={1}
              weight_unit="pound"
            />
            <ItemCardContainer
              name="Mango"
              description="A single mango"
              cost={3}
              weight={1}
              weight_unit="pound"
            />
          </div>
        </div>
      </div>
    );
  }
}
