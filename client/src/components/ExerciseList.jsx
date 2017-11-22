import React from 'react'

import Exercise from './Exercise'

class ExerciseList extends Component {

  constructor(props){
    super(props);
    this.getUnique = this.getUnique.bind(this);
  }

  getUnique(count) {
    // Make a copy of the array
    const tmp = this.props.apiData.slice();
    const ret = [];

    for (const i = 0; i < count; i++) {
      const index = Math.floor(Math.random() * tmp.length);
      const removed = tmp.splice(index, 1);
      // Since we are only removing one element
      ret.push(removed[0]);
    }
    return ret;
  }

  render(){
    return (
      <div className='exercise-list'>
        {this.getUnique(4).map(exercise => {
          return <Exercise key={exercise.id} exercise={exercise} />
        })}
      </div>
    )
  }
}

export default ExerciseList;
