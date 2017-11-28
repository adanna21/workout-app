import React from 'react'
import { Link } from 'react-router-dom'

function Categories (props) {
  return (
    <div className='button-list' style={{backgroundColor: '#8080868c'}}>
      {props.clickedCategory === 'weight' ? (
        <div className='category-wrapper'>
          <div id='w-chest' onClick={() => props.getBodyType('chest')}>
            <Link to='/routine'><h1 className='category-text'>Chest</h1></Link>
          </div>
          <div id='w-legs' onClick={() => props.getBodyType('legs')}>
            <Link to='/routine'><h1 className='category-text'>Legs</h1></Link>
          </div>
          <div id='w-back' onClick={() => props.getBodyType('back')}>
            <Link to='/routine'><h1 className='category-text'>Back</h1></Link>
          </div>
          <div id='w-delts' onClick={() => props.getBodyType('delts')}>
            <Link to='/routine'><h1 className='category-text'>Delts</h1></Link>
          </div>
        </div>
      ) : (
        <div className='category-wrapper'>
          <div id='cal-chest' onClick={() => props.getBodyType('chest')}>
            <Link to='/routine'><h1 className='category-text'>Chest</h1></Link>
          </div>
          <div id='cal-legs' onClick={() => props.getBodyType('legs')}>
            <Link to='/routine'><h1 className='category-text'>Legs</h1></Link>
          </div>
          <div id='cal-back' onClick={() => props.getBodyType('back')}>
            <Link to='/routine'><h1 className='category-text'>Back</h1></Link>
          </div>
          <div id='cal-delts' onClick={() => props.getBodyType('delts')}>
            <Link to='/routine'><h1 className='category-text'>Delts</h1></Link>
          </div>
        </div>
      )}
    </div>

  )
}

export default Categories
