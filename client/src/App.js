import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import './css/bootstrap.min.css'
import './css/shards.min.css'
import './css/App.css'

import SignIn from './components/sign_in';

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return <Router>
        <div className="App">
          <Route path="/" component={SignIn} />
          <p>{this.state.response}</p>
        </div>
      </Router>;
  }
}

export default App;
