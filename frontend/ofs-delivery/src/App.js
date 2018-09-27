import React, { Component } from 'react';
import { Route } from "react-router-dom";

import SignIn from './components/sign_in';
import './css/App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={SignIn} />
      </div>
    );
  }
}

export default App;
