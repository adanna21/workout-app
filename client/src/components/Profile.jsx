import React, { Component } from 'react';

import RoutineList from './RoutineList';

class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {
      apiDataLoaded: false,
      apiData: null,
    }
    this.getUserFavorites = this.getUserFavorites.bind(this);
  }

  componentDidMount(){
    this.getUserFavorites();
  }

  // run a fetch on routines
  getUserFavorites(){
    fetch('/api/routine/')
    .then(res => res.json())
    .then(res => {
      this.setState({
        apiDataLoaded: true,
        apiData: res,
      })
    }).catch(err => console.log(err))
  }

  render(){
    return (
      <div className='profile'>
        {this.state.apiDataLoaded ? (
          <div>
            <h2>Welcome {this.props.user.username}</h2>
            <RoutineList apiData={this.state.apiData} user_id = {this.props.user.id} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
  }

}

export default Profile;
