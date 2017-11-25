import React from 'react';

function RoutineList(props){
  console.log("+++ routinelist +++")
  console.log(props)

  return(
    <div className="routine-list">
      <ul>
        {props.apiData.map(routine => {
          if (routine.user === props.user_id){
            return (
              <div className="routines">
                <p>{routine.exercise1}</p>
                <p>{routine.exercise2}</p>
                <p>{routine.exercise3}</p>
                <p>{routine.exercise4}</p>
              </div>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default RoutineList;
