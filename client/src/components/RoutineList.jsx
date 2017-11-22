import React from 'react';

function RoutineList(props){
  console.log("+++ routinelist +++")
  console.log(props)

<<<<<<< HEAD
  return(
    <div className="routine-list">
      <ul>
        {props.apiData.map(routine => {
=======
  let dummyList = [
  {
    id: 1,
    user: 1,
    exercise1: "1241",
    exercise2: "1241",
    exercise3: "1241",
    exercise4: "1241",
  },
  {
    id: 2,
    user: 2,
    exercise1: "1aewf",
    exercise2: "12efawe1",
    exercise3: "12afae41",
    exercise4: "1eafwe",
  },
  {
    id: 3,
    user: 1,
    exercise1: "13451",
    exercise2: "1241451",
    exercise3: "125141",
    exercise4: "167241",
  }
  ,{
    id: 4,
    user: 3,
    exercise1: "1qwe",
    exercise2: "qttreq1",
    exercise3: "qerty1",
    exercise4: "ra23r1",
  }
  ]

  return(
    <div className="routine-list">
      <ul>
        {dummyList.map(routine => {
>>>>>>> trying to do routineslist and related stuff
          if (routine.user === props.user_id){
            return (
              <div>
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
