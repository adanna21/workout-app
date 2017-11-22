import React from 'react'

import { Link } from 'react-router-dom'
import Iframe from 'react-iframe'

function Instructions (props) {
  console.log(props.apiData)
  const link = props.apiData.link
  console.log(link);
  return (
    <div className='instructions'>
      <h2>How To</h2>
      {props.apiData ?
        <Iframe width='420' height='345' url={link} />
      :
        <p>loading</p>
      }
    </div>
  )
}

export default Instructions
