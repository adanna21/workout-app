import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// This component renders the /categories page. Each div section is a button that contains a link.
// Each link leads to the same page (/routine); however, they all pass different data.

class Categories extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getBodyType(null)
    this.props.saveList(null)
  }

  render(){
    return(
      <div
        className="button-list"
        style={{backgroundColor: '#8080868c'}} >
        <div
          className="chest-button"
          onClick={() => this.props.getBodyType("chest")} >
          <Link to="/routine">
            <h1 id="text">Chest</h1>
          </Link>
        </div>
        <div
          className="legs-button"
          onClick={() => this.props.getBodyType("legs")} >
          <Link to="/routine">
            <h1 id="text">Legs</h1>
          </Link>
        </div>
        <div
          className="back-button"
          onClick={() => this.props.getBodyType("back")} >
          <Link to="/routine">
            <h1 id="text">Back</h1>
          </Link>
        </div>
        <div
          className="delts-button"
          onClick={() => this.props.getBodyType("delts")} >
          <Link to="/routine">
            <h1 id="text">Delts</h1>
          </Link>
        </div>
      </div>
    )
  }

}

export default Categories
