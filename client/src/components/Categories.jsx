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
    return (
      <div className='button-list' style={{backgroundColor: '#8080868c'}}>
        {this.props.clickedCategory === 'weight' ? (
          <div className='category-wrapper'>
            <div id='w-chest' onClick={() => this.props.getBodyType('chest')}>
              <Link to='/routine'><h1 className='category-text'>Chest</h1></Link>
            </div>
            <div id='w-legs' onClick={() => this.props.getBodyType('legs')}>
              <Link to='/routine'><h1 className='category-text'>Legs</h1></Link>
            </div>
            <div id='w-back' onClick={() => this.props.getBodyType('back')}>
              <Link to='/routine'><h1 className='category-text'>Back</h1></Link>
            </div>
            <div id='w-delts' onClick={() => this.props.getBodyType('delts')}>
              <Link to='/routine'><h1 className='category-text'>Delts</h1></Link>
            </div>
          </div>
        ) : (
          <div className='category-wrapper'>
            <div id='cal-chest' onClick={() => this.props.getBodyType('chest')}>
              <Link to='/routine'><h1 className='category-text'>Chest</h1></Link>
            </div>
            <div id='cal-legs' onClick={() => this.props.getBodyType('legs')}>
              <Link to='/routine'><h1 className='category-text'>Legs</h1></Link>
            </div>
            <div id='cal-back' onClick={() => this.props.getBodyType('back')}>
              <Link to='/routine'><h1 className='category-text'>Back</h1></Link>
            </div>
            <div id='cal-delts' onClick={() => this.props.getBodyType('delts')}>
              <Link to='/routine'><h1 className='category-text'>Delts</h1></Link>
            </div>
          </div>
        )}
      </div>
    )
  }

}

export default Categories
