import React, { Component } from 'react';

import RoutineList from './RoutineList';

class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {
      which: null,
      apiDataLoaded: false,
      apiData: null,
    }
    this.getUserFavorites = this.getUserFavorites.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(id){
    fetch(`/api/routine/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .catch(err => console.log(err))
    this.getUserFavorites();
    this.getUserFavorites();
    this.getUserFavorites();
    this.getUserFavorites();
  }

  render(){
    return (
      <div className='profile'>
        {this.state.apiDataLoaded ? (
          <div>
            <h2>Welcome {this.props.user.username}</h2>
            <RoutineList apiData={this.state.apiData} user_id = {this.props.user.id} handleDelete={this.handleDelete} getUserFavorites={this.getUserFavorites}/>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
  }

}

export default Profile;
