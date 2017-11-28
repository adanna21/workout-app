import React, { Component } from 'react'
import Exercise from './Exercise'

class ExerciseList extends Component {

  constructor(props){
    super(props)
    this.state = {
      list: null
    }
  }

  componentDidMount(){

    // Courtesy of stackoverflow.
    // This snippet shuffles the elements in an array.

    // Sets up a dummy array to hold the data.
    let array = this.props.apiData

    // Variable declaration all-in-one.
    let currentIndex = array.length, temporaryValue, randomIndex

    // We take out all the elements in the dummy array until it's empty.
    while (currentIndex !== 0) {

      // randomIndex is a random index in this new array.
      randomIndex = Math.floor(Math.random() * currentIndex)

      // Because arrays start at 0.
      currentIndex -= 1

      // Handling the array and the new array value.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    // This if statement is to manage savedList.
    // Basically, if the user has populated a routine, that routine is saved.
    // If there is no saved routine, then it will spawn a random routine list.

    if(this.props.savedList){
      this.setState({
        list: this.props.savedList
      })
    } else {
      let temp = array.slice(0, 4)
      this.setState({
        list: temp
      })
      this.props.saveList(temp)
    }

  }

  // Save a routine. POST request.

  saveRoutine(){
    fetch('/api/routine/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'New Routine',
        type: this.state.list[0].type,
        bodypart: this.state.list[0].bodypart,
        user_id: this.props.user.id,
        exercises1: this.state.list[0].id,
        exercises2: this.state.list[1].id,
        exercises3: this.state.list[2].id,
        exercises4: this.state.list[3].id
      })
    }).catch(err => console.log(err))
  }

  // Some conditional rendering for when you haven't properly selected your exercises.

  render(){
    return (
      <div className='exercise-list'>
        {this.state.list ? (
          this.state.list.map(exercise => {
            return(
              <Exercise
                key={exercise.id}
                exercise={exercise}
                selectExerciseById={this.props.selectExerciseById}
                setSource={this.props.setSource}
              />
            )
          })
        ) : (
          <p>Loading...</p>
        )}
        {(this.props.filteredData2.length === 0) ? (
          <p>Error with category selection. Please return to Home and try again.</p>
        ) : (
          this.props.auth ? (
            <button className='save-exercise-btn' onClick={() => this.saveRoutine()}>Save This Routine</button>
          ) : (
            <p className='save-exercise-p'>Please login to save</p>
          )
        )}

      </div>
    )
  }
}

export default ExerciseList
