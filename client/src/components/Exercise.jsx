import React from 'react';

function Exercise(props){
  return(
    <div className="exercise-card">
      <p>{props.exercise.name}</p>
    </div>
  )
}

export default Exercise;
