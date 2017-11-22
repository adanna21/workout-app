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

    for (const i = 0; i < count; i++) {
      const index = Math.floor(Math.random() * tmp.length);
      const removed = tmp.splice(index, 1);
      // Since we are only removing one element
      ret.push(removed[0]);
    }
    return ret;
  }

  render(){
    return (
      <div className='exercise-list'>
        {this.getUnique(4).map(exercise => {
          return <Exercise key={exercise.id} exercise={exercise} />
        })}
      </div>
    )
  }

  createNewRoutine(){
    let routine = {
      name: "asdfgh",
      type: "weight",
      bodyPart: "delts",
      user_id: this.props.user.id,
      exercise1: "afrragrsefa",
      exercise2: "afrragrsefa",
      exercise3: "afrragrsefa",
      exercise4: "afrragrsefa"
    }
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
    console.log("user")
    console.log(this.props.user)
    return (
      <div className='exercise-list'>
        {this.props.apiData.map(exercise => {
          return <Exercise key={exercise.id} exercise={exercise} />
        })}
        <button onClick={() => this.createNewRoutine()}>Save</button>
      </div>
    )
  }

}

export default ExerciseList;
