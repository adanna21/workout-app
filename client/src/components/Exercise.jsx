import React, { Component } from 'react'

class Exercise extends Component {
  construcor (props) {
    super(props)
    // this.state = {
    //
    // }
  }
  render () {
    return (
      <div className='exercise-card'>
        <p>{this.props.exercise.name}</p>
      </div>
    )
  }
}

export default Exercise
