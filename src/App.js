import React, { Component } from 'react';
import './App.css';
var Board = require('./Board')

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
