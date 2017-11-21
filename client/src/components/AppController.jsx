import React, {Component} from 'react'
import Home from './Home'

class AppController extends Component {
  constructor (props) {
    super(props)
    this.state = {
      exerciseData: null,
      apiDataLoaded: false,
      currentPage: null
    }
  }

  componentDidMount () {
    fetch('api/lift')
    .then(res => res.json())
    .then(res => {
      this.setState({
        exerciseData: res.data.lifts,
        apiDataLoaded: true
      })
      console.log(this.state.exerciseData)
    }).catch(err => console.log(err))
  }

  // switchRender(){
  //   switch(this.state.currentPage) {
  //     case
  //     return
  //     break;
  //   }
  // }

  render () {
    return (
      <div className='container'>
        <Home
          exerciseData={this.state.exerciseData}
          apiDataLoaded={this.state.apiDataLoaded}
       />
      </div>
    )
  }
}

export default AppController
