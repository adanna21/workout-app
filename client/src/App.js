
import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Profile from './components/Profile'
import Register from './components/Register'
import './App.css'

import Home from './components/Home'
import Header from './components/Header'
// import Footer from './components/Footer'
import Categories from './components/Categories'
import Instructions from './components/Instructions'
import ExerciseList from './components/ExerciseList'
const fetch = window.fetch

class App extends Component {
  // constructor & state
  constructor (props) {
    super(props)
    this.state = {
      auth: false,
      user: null,
      apiData: null,
      apiDataLoaded: false,
      filteredData1: null,
      filteredData2: null,
      selectedExercise: {},
      instructionsClicked: false,
      savedList: null,
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.logout = this.logout.bind(this)
    this.getBodyType = this.getBodyType.bind(this)
    this.getExerciseType = this.getExerciseType.bind(this)
    this.reset = this.reset.bind(this)
    this.getApiData = this.getApiData.bind(this)
    this.selectExerciseById = this.selectExerciseById.bind(this)
    this.saveList = this.saveList.bind(this)
  }

  reset () {
    this.setState({
      apiData: null,
      apiDataLoaded: false,
      filteredData1: null,
      filteredData2: null
    })
  }

  getApiData () {
    fetch('/api/lift')
    .then(res => res.json())
    .then(res => {
      this.setState({
        apiData: res.data.lifts,
        apiDataLoaded: true
      })
    }).catch(err => console.log(err))
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
    this.getApiData()
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
      console.log(res)
      this.setState({
        auth: res.auth
      })
    }).catch(err => console.log(err))
  }

  getExerciseType (type) {
    let data = []
    this.state.apiData.map(lift => {
      if (lift.type === type) {
        data.push(lift)
      }
    })
    this.setState({
      filteredData1: data
    })
  }

  getBodyType (bodyType) {
    let data = []
    this.state.filteredData1.map(lift => {
      if (lift.bodypart === bodyType) {
        data.push(lift)
      }
    })
    this.setState({
      filteredData2: data
    })
  }

  selectExerciseById (id) {
    const exercise = this.state.apiData.find(exercise => {
      return exercise.id === id
    }) || {}
    this.setState({
      selectedExercise: exercise,
      instructionsClicked: true
    })
  }

  saveList (array) {
    this.setState({
      savedList: array,
    })
  }

  render () {
    return (
      <Router>
        <div className='App'>
          <Header
            logout={this.logout}
            auth={this.state.auth}
          />
          {this.state.apiDataLoaded ? (
            <div>
              <Route exact path='/' render={(props) =>
                <Home getExerciseType={this.getExerciseType}
                saveList={this.saveList}/>
                    } />
              <Route exact path='/login' render={() => (
                  this.state.auth
                  ? <Redirect to='/profile' />
                  : <Login handleLoginSubmit={this.handleLoginSubmit} fireRedirect={this.state.fireRedirect} />
                )} />
              <Route exact path='/profile' render={() => (
                  !this.state.auth
                  ? <Redirect to='/login' />
                  : <Profile user={this.state.user}/>
                )} />
              <Route exact path='/register' render={() => (
                  this.state.auth
                  ? <Redirect to='/profile' />
                  : <Register handleRegisterSubmit={this.handleRegisterSubmit} />
                )} />
              <Route exact path='/categories' render={(props) => (
                this.state.filteredData1
                  ? <Categories getBodyType={this.getBodyType} />
                  : <Redirect to='/' />
              )} />
              <Route exact path='/routine' render={(props) => (
                this.state.filteredData2
                  ? <ExerciseList
                    apiData={this.state.filteredData2}
                    auth={this.state.auth}
                    selectExerciseById={this.selectExerciseById}
                    user={this.state.user}
                    saveList={this.saveList}
                    savedList={this.state.savedList} />
                  : <Redirect to='/' />
                )} />
              <Route exact path='/instructions/:exerciseId' render={(props) => (
                this.state.filteredData2
                  ? <Instructions auth={this.state.auth}
                    apiData={this.state.filteredData2}
                    selectedExercise={this.state.selectedExercise} />
                  : <Redirect to='/' />
                )} />
            </div>
           ) : (
             <p>Loading...</p>
          )}

        </div>
      </Router>
    )
  }
}

export default App
