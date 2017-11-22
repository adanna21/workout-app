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
      body: JSON.stringify({
        name: "new Routine",
        type: routine[0].type,
        bodyPart: routine[0].bodyPart,
        user_id: this.props.user.id,
        exercises1: routine[0].id,
        exercises2: routine[1].id,
        exercises3: routine[2].id,
        exercises4: routine[3].id
      })
    })
    .then(res => res.json)
    .catch(err => console.log(err))
  }

  render(){
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

      </div>
    )
  }

}

export default ExerciseList;
