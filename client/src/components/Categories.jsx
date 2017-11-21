import React, {Component} from 'react';


class Categories extends Component {
  constructor(props) {
    super(props)
      this.state = {
        exerciseData: null,
        apiDataLoaded: false,
        weightButton:false,

      }
    }


weightClick(bodytype){
  let x = this.state.exerciseData;
  x.reduce(x=> {
  if(bodytype === "weight"){
    this.setState({
      exerciseData:this.state.type,
      apiDataLoaded:true,
      weightButton: true,
    });
  }
}).catch(err => console.log(err));
}




  render(){
    
    console.log(this.state.exerciseData)
    return(
      <h1>Hi categories</h1>
    )
  }
}

export default Categories
