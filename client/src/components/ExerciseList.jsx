import React, { Component } from 'react'

import Exercise from './Exercise'

class ExerciseList extends Component {

  constructor(props){
    super(props);
    this.getUnique = this.getUnique.bind(this);
    this.createNewRoutine = this.createNewRoutine.bind(this);
  }

  getUnique(count) {
    // Make a copy of the array
    const tmp = this.props.apiData.slice();
    const ret = [];

    for (let i = 0; i < count; i++) {
      const index = Math.floor(Math.random() * tmp.length);
      const removed = tmp.splice(index, 1);
      // Since we are only removing one element
      ret.push(removed[0]);
    }
    return ret;
  }

  createNewRoutine(routine){
    fetch('/api/routine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(routine)
    })
    .then(res => res.json)
    .catch(err => console.log(err))
  }

  render(){
    let dummy = this.getUnique(4);
    console.log("user")
    console.log(this.props.user)
    return (
      <div className='exercise-list'>
        {dummy.map(exercise => {
          return <Exercise key={exercise.id} exercise={exercise} />
        })}
        <button onClick={() => this.createNewRoutine(dummy)}>Save</button>
      </div>
    )
  }

}

export default ExerciseList;
