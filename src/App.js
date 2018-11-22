import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './counter/Home';

class App extends Component {
  componentDidMount() {
    document.title = "Clone Santren Koding";
  }

  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
