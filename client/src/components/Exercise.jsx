import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Instructions from './Instructions'

class Exercise extends Component {
  constructor (props) {
    super(props)
    // this.state = {
    //   instructionsClicked: false
    // }
    // this.changeInsClicked = this.changeInsClicked.bind(this)
  }

  // changeInsClicked () {
  //   console.log(this.props.exercise.link);
  //   this.setState({
  //     instructionsClicked: true
  //   })
  // }

  render () {
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
