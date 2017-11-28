import React from 'react'
import { Link } from 'react-router-dom'

function Categories(props){
  return(
    <div className="button-list" style={{backgroundColor: '#8080868c'}}>
      <div className="chest-button" onClick={() => props.getBodyType("chest")}>
        <Link to="/routine"><h1 id="text">Chest</h1></Link>
      </div>
      <div className="legs-button" onClick={() => props.getBodyType("legs")}>
        <Link to="/routine"><h1 id="text">Legs</h1></Link>
      </div>
      <div className="back-button" onClick={() => props.getBodyType("back")}>
        <Link to="/routine"><h1 id="text">Back</h1></Link>
      </div>
      <div className="delts-button" onClick={() => props.getBodyType("delts")}>
        <Link to="/routine"><h1 id="text">Delts</h1></Link>
      </div>
    </div>
  )
}

export default Categories
