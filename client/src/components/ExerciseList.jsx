import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
import Exercise from './Exercise'

class ExerciseList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      list: null
    }
  }

  componentDidMount () {
    let array = this.props.apiData
    let currentIndex = array.length, temporaryValue, randomIndex
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    if (this.props.savedList) {
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

    // if (this.props.filteredData1 && this.props.filteredData2){
    //   if (this.props.savedList) {
    //     this.setState({
    //       list: this.props.savedList
    //     })
    //   } else {
    //     let temp = array.slice(0, 4)
    //     this.setState({
    //       list: temp
    //     })
    //     this.props.saveList(temp)
    //   }
    // } else if (!this.props.filteredData2){
    //   this.setState({
    //     list: null
    //   })
    // }

  saveRoutine () {
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

  render () {
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
