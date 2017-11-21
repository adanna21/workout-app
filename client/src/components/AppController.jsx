import React, {Component} from 'react';

class AppController extends Component {
  constructor(props) {
    super(props) {
      this.state = {
        exerciseData: null,
        apiDataLoaded: false,
        currentPage:null,
      }
    }
  }


  componentDidMount(){
    fetch('api/lift')
    .then (res => res.json())
    .then(res => {
      this.setState({
        exerciseData:res.data.lifts,
        apiDataLoaded:true,
      });
    }).catch(err => console.log(err));
  }

  switchRender(){
    switch(this.state.currentPage) {
      case
      return
      break;
    }
  }

render() {
  return(
    <div className = "container">
      <h2>hello i am the controller</h2>
      <ExerciseList
        exerciseData={this.state.exerciseData}
        apiDataLoaded={this.state.apiDataLoaded}
       />
    </div>
  )
}
}

export default AppController
