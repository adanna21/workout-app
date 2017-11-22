import React from 'react'

import { Link } from 'react-router-dom'

function Instructions (props) {
  console.log(props.apiData);
  return (
    <div className='instructions'>
      <h2>How To</h2>
      <iframe src={props.apiData.link} />
    </div>
  )
}

export default Instructions
