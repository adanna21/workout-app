import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import EditName from './EditName'

class RoutineList extends Component {

  constructor(props){
    super(props)
    this.state = {
      edit: null,
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
    fetch(`/api/routine/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name || "New Routine"
      })
    })
    .catch(err => console.log(err))
    this.props.getUserFavorites();
    this.props.getUserFavorites();
    this.props.getUserFavorites();
    this.props.getUserFavorites();
  }

  toggleMode(id){
    if(this.state.edit){
      this.setState({
        edit: null,
      })
    } else {
      this.setState({
        edit: id,
      })
    }
  }

  render(){
    return(
      <div className="routine-list">
        {this.state.liftDataLoaded ? (
          <ul>
            {this.props.apiData.data.routines.map(routine => {
              console.log(routine)
              if (routine.user_id === this.props.user_id){
                return (
                  <div key={routine.id} className="routines">
                    <EditName edit={this.state.edit} toggleMode={this.toggleMode} routineName={routine.name} updateName={this.updateName} id={routine.id} />
                    <p>{routine.bodypart}</p>

                    <button onClick={() => {this.props.selectExerciseById(routine.exercises1); this.props.setSource("profile")}}>
                    <Link to={`/instructions/${routine.exercises1}`}>
                    {this.state.liftData[routine.exercises1 - 1].name}</Link>
                    </button>

                    <button onClick={() => {this.props.selectExerciseById(routine.exercises2); this.props.setSource("profile")}}>
                    <Link to={`/instructions/${routine.exercises2}`}>
                    {this.state.liftData[routine.exercises2 - 1].name}</Link>
                    </button>

                    <button onClick={() => {this.props.selectExerciseById(routine.exercises3); this.props.setSource("profile")}}>
                    <Link to={`/instructions/${routine.exercises3}`}>
                    {this.state.liftData[routine.exercises3 - 1].name}</Link>
                    </button>

                    <button onClick={() => {this.props.selectExerciseById(routine.exercises4); this.props.setSource("profile")}}>
                    <Link to={`/instructions/${routine.exercises4}`}>
                    {this.state.liftData[routine.exercises4 - 1].name}</Link>
                    </button>

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
