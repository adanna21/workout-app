import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Header from './components/Header';
import Categories from './components/Categories';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
        </div>
      </Router>
    )
  }
}

export default App;
