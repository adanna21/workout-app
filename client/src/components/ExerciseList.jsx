
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
      {props.exerciseData.reduce(type => {
        return <div key={exercise.id} exercise={exercise} />
      })}
      {/* <div
        exerciseData={props.exerciseData}
        apiDataLoaded={props.apiDataLoaded}
      /> */}
    </div>
   :
    <div>loading</div>

  )
}

export default ExerciseList
