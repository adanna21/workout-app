import React from 'react'
import Iframe from 'react-iframe'

function Instructions (props) {
  return (
    <div className='instructions'>
      <h2>How To {props.selectedExercise.name}</h2>
      <Iframe width='420' height='345' url={props.selectedExercise.link} />
    </div>
  )
}

export default Instructions
