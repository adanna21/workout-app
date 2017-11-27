import React, { Component } from 'react';

class RoutineList extends Component {

  constructor(props){
    super(props)
    this.state = {
      liftData: null,
      liftDataLoaded: false,
    }
    this.updateName = this.updateName.bind(this);
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
      body: {
        name: name
      }
    })
    .catch(err => console.log(err))
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
                    <p>{routine.name}</p>
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
