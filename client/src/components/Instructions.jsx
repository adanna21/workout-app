import React from 'react';

import { Link } from 'react-router-dom'

const Instructions = {props} => {
  return (
    <div className="instructions">{this.state.instructions}
      <h2>How To</h2>
        <iframe src={`http://www.youtube.com/embed/${this.props.instructions}`}></iframe> 
    </div>
  )
}

export default Instructions;
