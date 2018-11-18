import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class TopBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: "",
        lastName: "",
      };
    }

    render(){
        return (
            <div className="col-md-12 text-right" style={{padding:'0px'}}>
            <Link to="/user">
            <div className="dropdown topbar">
                <span className="badge badge-primary">
                {this.props.firstName + " " + this.props.lastName}
                </span>
            </div>
            </Link>
        </div>

        );
    }

}