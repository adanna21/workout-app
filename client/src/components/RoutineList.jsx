import React, { Component } from 'react';

import EditName from './EditName'

class RoutineList extends Component {

  constructor(props){
    super(props)
    this.state = {
      edit: false,
      liftData: null,
      liftDataLoaded: false,
    }
    this.updateName = this.updateName.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
  }

  componentDidMount(){
    fetch('/api/lift')
    .then(res => res.json())
    .then(res => {
      this.setState({
        liftData: res.data.lifts,
        liftDataLoaded: true,
      })
    })
    .catch(err => console.log(err))
  }

  updateName(id, name){
    console.log("id")
    console.log(id)
    console.log("name")
    console.log(name)
    fetch(`/api/routine/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name
      })
    })
    .catch(err => console.log(err))
    this.props.getUserFavorites();
    this.props.getUserFavorites();
    this.props.getUserFavorites();
    this.props.getUserFavorites();
  }

  toggleMode(){
    if(this.state.edit){
      this.setState({
        edit: false,
      })
    } else {
      this.setState({
        edit: true,
      })
    }
  }

  render(){
    return(
      <div className="routine-list">
        {this.state.liftDataLoaded ? (
          <ul>
            {this.props.apiData.data.routines.map(routine => {
              if (routine.user_id === this.props.user_id){
                return (
                  <div key={routine.id} className="routines">
                    <EditName edit={this.state.edit} toggleMode={this.toggleMode} routineName={routine.name} updateName={this.updateName} id={routine.id}/>
                    <p>{routine.bodypart}</p>
                    <p>{this.state.liftData[routine.exercises1 + 1].name}</p>
                    <p>{this.state.liftData[routine.exercises2 + 1].name}</p>
                    <p>{this.state.liftData[routine.exercises3 + 1].name}</p>
                    <p>{this.state.liftData[routine.exercises4 + 1].name}</p>
                    <button onClick={() => this.props.handleDelete(routine.id)}>DELETE</button>
                  </div>
                )
              }
              return null;
            })}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
  }
}

export default RoutineList;
