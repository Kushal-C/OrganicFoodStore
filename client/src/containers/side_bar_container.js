import React, {Component} from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getItemsRequest} from "../actions/index";
import SideBar from '../components/side_bar';

class SideBarContainer extends Component {
    
    constructor(props){
        super(props);
        this.updateDashboard = this.updateDashboard.bind(this);
    }

    updateDashboard(){
        const { category } = this.props.match.params
        this.props.getItems(category);
    }

    render(){
        return(<SideBar routeUpdate={this.updateDashboard}/>);
    }

}
function mapStateToProps(state) {
    return {
        items: state.items
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { getItems: getItemsRequest},
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBarContainer);
