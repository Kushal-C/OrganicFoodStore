import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import './css/bootstrap.min.css'
import './css/shards.min.css'
import './css/App.css'

import SignIn from './components/sign_in';

const App = ()=> (
  <Router>
    <div className="App">
      <Route path="/" component={SignIn} />
    </div>
  </Router>
);
