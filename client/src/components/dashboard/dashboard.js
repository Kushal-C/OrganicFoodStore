import React, { Component } from "react";
import {Link} from 'react-router-dom';

import Sidebar from "../side_bar";
import ItemCardContainer from "../../containers/item_card_container";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  render() {
    return <div>
        <div className="row">
          <div className="col-md-6 text-left">
            <h1 className="header-primary">OFS DELIVERY</h1>
          </div>
          <div className="col-md-6 text-right">
            <Link to="/user/">
              <div class="dropdown">
                <span class="badge badge-primary">
                  John Smith
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <Sidebar />
          <div className="col-md-9 text-left">
            <ItemCardContainer name="Broccoli" description="Flower of Broccoli" cost={2} weight={1} weight_unit="pound" />
            <ItemCardContainer name="Mango" description="A single mango" cost={3} weight={1} weight_unit="pound" />
          </div>
        </div>
      </div>;
  }
}
