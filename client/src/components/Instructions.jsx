import React, { Component } from 'react'
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom'

// This component is the instructional page.
// It has to back buttons for redirecting you to your previous page.

class Instructions extends Component {

  render() {
    return (
      <div className='instructions'>
        <h2>How To Do {this.props.selectedExercise.name}</h2>
        <Iframe width='60%' height='60%'
          allowFullScreen url={this.props.selectedExercise.link} />
        <div className='link-wrapper'>
          {this.props.source === 'profile' ?
            <Link to='/profile'
              className='instructions-btn'>Back</Link> :
          this.props.source === 'exercise' ?
            <Link to='/routine'
              className='instructions-btn'>Back</Link> :
            <Link to='/'>Error</Link>
          }
        </div>
      </div>
    )
  }
}

export default Instructions
