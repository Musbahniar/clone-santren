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
    page: "Mondok"
  }

  handelChangePage = (params) => {
    this.setState ({
      page: params
    })
  }
  
  render() {
    if (this.state.page=="Home") {
      return (
        <div>
            <Header ChangePage = {this.handelChangePage} />
            <Home />
        </div>
      )
    }
    if (this.state.page=="Kajian") {
        return (
          <div>
              <Header ChangePage = {this.handelChangePage} />
              <Kajian />
          </div>
        )
    }
    if (this.state.page=="Kitab") {
      return (
        <div>
            <Header ChangePage = {this.handelChangePage} />
            <Kitab />
        </div>
      )
    }
    if(this.state.page=="Mondok") {
      return (
        <div>
            <Header ChangePage = {this.handelChangePage} />
            <Mondok />
        </div>
      )
    }
  }
}

export default App;
