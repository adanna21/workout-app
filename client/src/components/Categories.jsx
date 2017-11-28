import React from 'react'
import { Link } from 'react-router-dom'

function Categories (props) {
  return (
    <div style={{backgroundColor: '#8080868c'}}>
      {props.clickedCategory === 'weights' ? (
        <div className='button-list'>
          <div className='chest-button' onClick={() => props.getBodyType('chest')}>
            <Link to='/routine'><h1 className='category-text'>Chest</h1></Link>
          </div>
          <div className='legs-button' onClick={() => props.getBodyType('legs')}>
            <Link to='/routine'><h1 className='category-text'>Legs</h1></Link>
          </div>
          <div className='back-button' onClick={() => props.getBodyType('back')}>
            <Link to='/routine'><h1 className='category-text'>Back</h1></Link>
          </div>
          <div className='delts-button' onClick={() => props.getBodyType('delts')}>
            <Link to='/routine'><h1 className='category-text'>Delts</h1></Link>
          </div>
        </div>
      ) : (
        <div className='button-list'>
          <div className='chest-button' onClick={() => props.getBodyType('chest')}>
            <Link to='/routine'><h1 className='category-text'>Chest</h1></Link>
          </div>
          <div className='legs-button' onClick={() => props.getBodyType('legs')}>
            <Link to='/routine'><h1 className='category-text'>Legs</h1></Link>
          </div>
          <div className='back-button' onClick={() => props.getBodyType('back')}>
            <Link to='/routine'><h1 className='category-text'>Back</h1></Link>
          </div>
          <div className='delts-button' onClick={() => props.getBodyType('delts')}>
            <Link to='/routine'><h1 className='category-text'>Delts</h1></Link>
          </div>
        </div>
      )}
    </div>

  )
}

export default Categories
