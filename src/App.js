import React, { Component } from 'react';
import './App.styl';

import { BrowserRouter, Route } from 'react-router-dom'

import Login from './page/Login/Login'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="container">
            <Route exact path="/" component={Login} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
