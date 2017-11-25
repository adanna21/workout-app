import React from 'react';

function RoutineList(props){
  console.log("+++ routinelist +++")
  console.log(props)
  return(
    <div className="routine-list">
      <ul>
        {props.apiData.data.routines.map(routine => {
          if (routine.user_id === props.user_id){
            return (
              <div key={routine.id} className="routine-list">
                <p>{routine.name}</p>
                <p>{routine.bodypart}</p>
                <p>{routine.exercises1}</p>
                <p>{routine.exercises2}</p>
                <p>{routine.exercises3}</p>
                <p>{routine.exercises4}</p>
              </div>
            )
          }
          return null;
        })}
      </ul>
    </div>
  )
}

export default RoutineList;
