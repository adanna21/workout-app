import React, { Component } from 'react'

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
      </div>
    )
  }
}

export default Exercise
