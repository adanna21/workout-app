import React, { Component } from 'react'
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom'

// import { withRouter } from 'react-router-dom'

class Instructions extends Component {

  render(){
    return (
      <div className='instructions'>
        <h2>How To {this.props.selectedExercise.name}</h2>
        <Iframe width='420' height='345' url={this.props.selectedExercise.link} />
        {this.props.source === "profile" ?
          <Link to='/profile'>Back</Link> :
        this.props.source === "exercise" ?
          <Link to='/routine'>Back</Link> :
          <Link to='/'>Error</Link>
        }
      </div>
    )
  }

}

export default Instructions
