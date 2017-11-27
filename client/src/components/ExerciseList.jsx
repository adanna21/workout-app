import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
import Exercise from './Exercise'

class ExerciseList extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: null
    }
  }

  componentDidMount(){

    // stack overflow's shuffle an array
    let array = this.props.apiData
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;

    }

    if(this.props.savedList){
      this.setState({
        list: this.props.savedList
      })
    } else {
      let temp = array.slice(0,4)
      this.setState({
        list: temp
      })
      this.props.saveList(temp)
    }
  }

  saveRoutine(){
    fetch('/api/routine/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: "New Routine",
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

  render(){
    return (
      <div className='exercise-list'>
        {this.state.list ? (
          this.state.list.map(exercise => {
          return <Exercise key={exercise.id} exercise={exercise} selectExerciseById={this.props.selectExerciseById} setSource={this.props.setSource} />
          })
        ) : (
          <p>Loading...</p>
        )}
        {this.props.auth ? (
          <button onClick={() => this.saveRoutine()}>Save</button>
        ) : (
          <p>Please log in to save.</p>
        )}
      </div>
    )
  }
}

// export default withRouter(ExerciseList)
export default ExerciseList
