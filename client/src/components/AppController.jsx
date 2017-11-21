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
        exerciseData:res.data.exercises,
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
<Categories exerciseData = {this.state.excersiceData} />
    </div>
  )
}
}

export default AppController
