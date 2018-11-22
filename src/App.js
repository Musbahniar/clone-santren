import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './pages/Home';
import Kajian from './pages/Kajian';
import Kitab from './pages/Kitab';
import Mondok from './pages/Mondok';

class App extends Component {
  componentDidMount() {
    document.title = "Clone Santren Koding";
  }

  state = {
    page: "Home"
  }
  
  render() {
    if (this.state.page=="Home") {
      return (
        <div>
            <Header />
            <Home />
        </div>
      )
    }
    if (this.state.page=="Kajian") {
        return (
          <div>
              <Header />
              <Kajian />
          </div>
        )
    }
    if (this.state.page=="Kitab") {
      return (
        <div>
            <Header />
            <Kitab />
        </div>
      )
  }
  }
}

export default App;
