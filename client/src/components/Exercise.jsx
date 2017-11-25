import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Exercise extends Component {

  render(){
    return (
      <div className='exercise-card'>

        <h3>{this.props.exercise.name}</h3>
        <p>{this.props.exercise.sets}</p>
        <p>{this.props.exercise.reps}</p>
        <button onClick={() => this.props.selectExerciseById(this.props.exercise.id)}>
          <Link to={`/instructions/${this.props.exercise.id}`}> Instructions </Link>
        </button>

      </div>
    )
  }
}

export default Exercise
