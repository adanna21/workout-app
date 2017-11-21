import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Categories from './components/Categories';
// import Login from './components/Login';
// import Register from './components/Register';
// import Profile from './components/Profile';
import ExerciseList from './components/ExerciseList';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      apiData: null,
      apiDataLoaded: false,
      filteredData1: null,
      filteredData2: null,
    }
    this.getBodyType = this.getBodyType.bind(this);
    this.getExerciseType = this.getExerciseType.bind(this);
    this.reset = this.reset.bind(this);
    this.getApiData = this.getApiData.bind(this);
  }

  reset(){
    this.setState({
      apiData: null,
      apiDataLoaded: false,
      filteredData1: null,
      filteredData2: null,
    })
  }

  getApiData(){
    fetch('/api/lift')
    .then(res => res.json())
    .then(res => {
      this.setState({
        apiData: res.data.lifts,
        apiDataLoaded: true,
      });
    }).catch(err => console.log(err));
  }

   componentDidMount(){
    this.getApiData();
  }

  getExerciseType(type){
    let data = [];
    this.state.apiData.map(lift => {
      if (lift.type === type){
        data.push(lift)
      }
    })
    this.setState({
      filteredData1: data,
    })
  }

  getBodyType(bodyType){
    let data = [];
    this.state.filteredData1.map(lift => {
      if (lift.bodypart === bodyType){
        data.push(lift)
      }
    })
    this.setState({
      filteredData2: data,
    })
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Header reset={this.reset}/>
          {this.state.apiDataLoaded ? (
            <div>
              <Route exact path="/" render={(props) =>
                <Home getExerciseType={this.getExerciseType} />
              } />
              <Route exact path="/categories" render={(props) =>
                <Categories getBodyType={this.getBodyType} />
              } />
              {/*<Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />*/}
              <Route exact path="/routine" render={(props) =>
                <ExerciseList apiData={this.state.filteredData2} />
              } />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Router>
    )
  }
}

export default App;
