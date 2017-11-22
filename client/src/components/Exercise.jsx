import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Instructions from './Instructions'

class Exercise extends Component {
  constructor (props) {
    super(props)
    this.state = {
      instructionsClicked: false
    }
  }
  render () {
    return (
      <div className='exercise-card'>

        {this.state.instructionsClicked ?
          <div>
            <h3>{this.props.exercise.name}</h3>
            <p>{this.props.exercise.sets}</p>
            <p>{this.props.exercise.reps}</p>
          </div>
      :
          <div>
            <Instructions exerciseUrl={this.props.exercise.url} />
          </div>
      }

      </div>
    )
  }
}

export default Exercise
