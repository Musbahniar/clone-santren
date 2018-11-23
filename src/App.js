import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './pages/Home';
import Kajian from './pages/Kajian';
import Kitab from './pages/Kitab';
import Mondok from './pages/Mondok';
import NotFound from './component/NotFound';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    document.title = "Clone Santren Koding";
  }


  handelChangePage = (params) => {
    this.setState ({
      page: params
    })
  }
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/kajian" component={Kajian} />
        <Route path="/mondok" component={Mondok} />
        <Route path="/kitab" component={Kitab} />
        <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;
