import React from 'react'
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom'


function Instructions (props) {
  return (
    <div className='instructions'>
      <h2>How To {props.selectedExercise.name}</h2>
      <Iframe width='420' height='345' url={props.selectedExercise.link} />
      <Link to='/routine'>Back</Link>
    </div>
  )
}

export default Instructions
