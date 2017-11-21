
import React from 'react'

import Exercise from './Exercise'
import Categories from './Categories'

// const ExerciseList = (props) => {
//   return (
//     <div className='exercise-list'>
//       {props.datanamehere.map(exercise => {
//         return <Exercise key={exercise.id} exercise={exercise} />
//       })}
//     </div>
//   )
// }
function ExerciseList (props) {
  return (
    props.apiDataLoaded ?
      <div className='exercise-list'>
        {props.exerciseData.map(exercise => {
          return <div key={exercise.id} exercise={exercise.type} />
        })}
      </div>
   :
      <div>loading</div>

  )
}

export default ExerciseList
