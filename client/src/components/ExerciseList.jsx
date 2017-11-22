import React from 'react'

import Exercise from './Exercise'

function ExerciseList(props){
  console.log(props)
  return (
    <div className='exercise-list'>
      {props.apiData.map(exercise => {
        return <Exercise key={exercise.id} exercise={exercise} />
      })}
    </div>
  )
}

export default ExerciseList;
