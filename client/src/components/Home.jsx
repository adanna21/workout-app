import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class Home extends Component {

  componentDidMount () {
    this.props.saveList(null)
    this.props.getExerciseType(null)
  }

  render () {
    return (
      <div className='home'>
        {/* <h1 id="name">iLIFT</h1> */}
        <h3 id='title'>WHERE WOULD YOU LIKE TO START TODAY?</h3>
        <div className='button'>
          <Link className='button2' to='/categories' onClick={() => this.props.getExerciseType('weight')}>Weights</Link>
          <Link className='button3' to='/categories' onClick={() => this.props.getExerciseType('calisthenics')}>Calisthenics</Link>
        </div>
      </div>
    )
  }
};

export default Home
