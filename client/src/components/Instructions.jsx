import React from 'react';

import { Link } from 'react-router-dom'

const Instructions = {props} => {
  return (
    <div className="instructions">
      <h2>How To</h2>
        <iframe src="http://www.youtube.com/embed/" + {this.props.instructions}
      frameBorder = "0"
      allowFullScreen > < /iframe> 
    </div>
  )
}
export default Instructions;
