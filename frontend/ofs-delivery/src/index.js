import React from 'react';
import ReactDOM, { render }  from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import App from './App';

ReactDOM.render(
                <BrowserRouter>
                  <App/>
                </BrowserRouter>, 
        document.getElementById('root'));
