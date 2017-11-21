import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import AppController from './components/AppController'
import Header from './components/Header'
import Categories from './components/Categories'
import ExerciseList from './components/ExerciseList'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Route exact path='/' component={AppController} />
          <Route exact path='/categories' component={Categories} />
          <Route exact path='/exercises' component={ExerciseList} />
        </div>
      </Router>
    )
  }
}

export default App
