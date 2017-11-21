// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import './App.css';
//
// import Home from './components/Home';
// import Header from './components/Header';
// import Categories from './components/Categories';
//
//
// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <Header />
//           <Route exact path="/" component={Home} />
//           <Route exact path="/categories" component={Categories} />
//
//
//         </div>
//       </Router>
//     )
//   }
// }
//
// export default App;

import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Profile from './components/Profile'
import Register from './components/Register'
import './App.css'

import Home from './components/Home'
import Header from './components/Header'
// import Footer from './components/Footer'
import ExerciseList from './components/ExerciseList'
const fetch = window.fetch

class App extends Component {
  // constructor & state
  constructor (props) {
    super(props)
    this.state = {
      auth: false,
      user: null
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentDidMount () {
    fetch('/api/auth/verify', {
      credentials: 'include'
    }).then(res => res.json())
    .then(res => {
      this.setState({
        auth: res.auth,
        user: res.data.user
      })
    }).catch(err => console.log(err))
  }

  handleLoginSubmit (e, data) {
    e.preventDefault()
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({
        auth: res.auth,
        user: res.data.user
      })
    }).catch(err => console.log(err))
  }

  handleRegisterSubmit (e, data) {
    console.log(data)
    e.preventDefault()
    fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({
        auth: res.auth,
        user: res.data.user
      })
    }).catch(err => console.log(err))
  }

  logout () {
    fetch('/api/auth/logout', {
      credentials: 'include'
    }).then(res => res.json())
    .then(res => {
      this.setState({
        auth: res.auth
      })
    }).catch(err => console.log(err))
  }

  render () {
    return (
      <Router>
        <div className='App'>
          <Header
            logout={this.logout}
            user={this.state.user}
          />
          <Route exact path='/' component={Home} />
          {/* <div className='container'> */}
          <Route exact path='/login' render={() => (
            this.state.auth
            ? <Redirect to='/profile' />
            : <Login handleLoginSubmit={this.handleLoginSubmit} />
          )} />
          <Route exact path='/profile' render={() => (
            !this.state.auth
            ? <Redirect to='/login' />
            : <Profile user={this.state.user} />
          )} />
          <Route exact path='/register' render={() => (
            this.state.auth
            ? <Redirect to='/profile' />
            : <Register handleRegisterSubmit={this.handleRegisterSubmit} />
          )} />
          <Route exact path='/exercises' render={() => <ExerciseList auth={this.state.auth} />} />

          {/* </div> */}
          {/* <Footer /> */}

        </div>
      </Router>
    )
  }
}

export default App
