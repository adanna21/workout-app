import React, { Component } from 'react'
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom'

// import { withRouter } from 'react-router-dom'

class Instructions extends Component {

  render () {
    return (
      <div className='instructions'>
        <h2>How To {this.props.selectedExercise.name}</h2>
        <Iframe width='50%' height='50%' url={this.props.selectedExercise.link} />
        <div className='link-wrapper'>
          {this.props.source === "profile" ?
            <Link to='/profile' className='routine-back'>Back</Link> :
          this.props.source === "exercise" ?
            <Link to='/routine' className='routine-back'>Back</Link> :
            <Link to='/'>Error</Link>
          }
        </div>
      </div>
    )
  }

}

export default Instructions
