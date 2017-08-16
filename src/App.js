import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var Cell = require('./Cell')

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cell/>
      </div>
    );
  }
}

export default App;
