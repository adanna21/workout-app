import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Exercise extends Component {
  constructor (props) {
    super(props)
    // this.state = {
    //
    // }
  }
  render () {
    return (
      <div className='exercise-card'>
        <h3>{this.props.exercise.name}</h3>
        <p>{this.props.exercise.sets}</p>
        <p>{this.props.exercise.reps}</p>
        <Link to={`/instructions/${this.props.exercise.id}`}><button>Instructions</button></Link>
      </div>
    )
  }
}

export default Exercise
