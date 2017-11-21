import React from 'react';
import { Link } from 'react-router-dom';

function Categories(props){
  return(
    <div className="button-list">
      <div className="chest-button" onClick={() => props.getBodyType("chest")}>
        <Link to="/routine">Chest</Link>
      </div>
      <div className="legs-button" onClick={() => props.getBodyType("legs")}>
        <Link to="/routine">Legs</Link>
      </div>
      <div className="back-button" onClick={() => props.getBodyType("back")}>
        <Link to="/routine">Back</Link>
      </div>
      <div className="delts-button" onClick={() => props.getBodyType("delts")}>
        <Link to="/routine">Delts</Link>
      </div>
    </div>
  )

}

export default Categories;
