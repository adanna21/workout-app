import React, { Component } from 'react'
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom'

// import { withRouter } from 'react-router-dom'

class Instructions extends Component {

  render () {
    return (
      <div className='instructions'>
<<<<<<< HEAD
        <h2>How To {this.props.selectedExercise.name}</h2>
        <Iframe width='50%' height='50%' url={this.props.selectedExercise.link} />
        <div className='link-wrapper'>
          {this.props.source === "profile" ?
            <Link to='/profile' className='routine-back'>Back</Link> :
          this.props.source === "exercise" ?
            <Link to='/routine' className='routine-back'>Back</Link> :
=======
        <h2>How To Do {this.props.selectedExercise.name}</h2>
        <Iframe width='60%' height='60%' allowFullScreen url={this.props.selectedExercise.link} />
        <div className='link-wrapper'>
          {this.props.source === 'profile' ?
            <Link to='/profile' className='instructions-btn'>Back</Link> :
          this.props.source === 'exercise' ?
            <Link to='/routine' className='instructions-btn'>Back</Link> :
>>>>>>> added style change to inst
            <Link to='/'>Error</Link>
          }
        </div>
      </div>
    )
  }
}

export default Instructions
