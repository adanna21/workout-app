import React, { Component } from 'react'

import Exercise from './Exercise'

class ExerciseList extends Component {

  constructor(props){
    super(props);
<<<<<<< HEAD
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
=======
    this.createNewRoutine = this.createNewRoutine.bind(this);
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
>>>>>>> trying to do routineslist and related stuff
    fetch('/api/routine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
<<<<<<< HEAD
      body: JSON.stringify({
        name: "new Routine",
        type: routine[0].type,
        bodypart: routine[0].bodypart,
        user_id: this.props.user.id,
        exercises1: routine[0].id,
        exercises2: routine[1].id,
        exercises3: routine[2].id,
        exercises4: routine[3].id
      })
=======
      body: JSON.stringify(routine)
>>>>>>> trying to do routineslist and related stuff
    })
    .then(res => res.json)
    .catch(err => console.log(err))
  }

  render(){
<<<<<<< HEAD
    let dummy = this.getUnique(4);
    console.log("dummy")
    console.log(dummy)
    return (
      <div className='exercise-list'>
        {dummy.map(exercise => {
          return <Exercise key={exercise.id} exercise={exercise} />
        })}
        {this.props.user ? (<button onClick={() => this.createNewRoutine(dummy)}>Save</button>) : (
          <p>Please log in to save</p>
        )}

=======
    console.log("user")
    console.log(this.props.user)
    return (
      <div className='exercise-list'>
        {this.props.apiData.map(exercise => {
          return <Exercise key={exercise.id} exercise={exercise} />
        })}
        <button onClick={() => this.createNewRoutine()}>Save</button>
>>>>>>> trying to do routineslist and related stuff
      </div>
    )
  }

}

export default ExerciseList;
