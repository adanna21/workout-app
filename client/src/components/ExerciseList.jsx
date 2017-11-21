
import React from 'react'

import Exercise from './Exercise'

const ExerciseList = (props) => {
  return (
    <div className='exercise-list'>
      {props.datanamehere.map(exercise => {
        return <Exercise key={exercise.id} exercise={exercise} />
      })}
    </div>
  )
}

export default ExerciseList
