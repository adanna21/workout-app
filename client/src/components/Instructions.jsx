import React from 'react'

import { Link } from 'react-router-dom'
import Iframe from 'react-iframe'

function Instructions (props) {
  console.log(props.apiData)
  return (
    <div className='instructions'>
      <h2>How To</h2>
      <Iframe width='420' height='345' url={props.apiData.link} />
    </div>
  )
}

export default Instructions
