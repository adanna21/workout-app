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
            <div className='category-container'>
              <Link to='/routine'>
              <h1 className='category-text'>Chest</h1>
              <div id='w-chest' className='category-transform' onClick={() => this.props.getBodyType('chest')}>
              </div>
              </Link>
            </div>
            <div className='category-container'>
              <Link to='/routine'>
              <h1 className='category-text'>Legs</h1>
              <div id='w-legs' className='category-transform' onClick={() => this.props.getBodyType('legs')}>
              </div>
              </Link>
            </div>
            <div className='category-container'>
              <Link to='/routine'>
              <h1 className='category-text'>Back</h1>
              <div id='w-back' className='category-transform' onClick={() => this.props.getBodyType('back')}>
              </div>
              </Link>
            </div>
            <div className='category-container'>
              <Link to='/routine'>
              <h1 className='category-text'>Delts</h1>
              <div id='w-delts' className='category-transform' onClick={() => this.props.getBodyType('delts')}>
              </div>
              </Link>
            </div>
          </div>
        ) : (
          <div className='category-wrapper'>
            <div className='category-container'>
              <Link to='/routine'>
              <h1 className='category-text'>Chest</h1>
              <div id='cal-chest' className='category-transform' onClick={() => this.props.getBodyType('chest')}>
              </div>
              </Link>
            </div>
            <div className='category-container'>
              <Link to='/routine'>
              <h1 className='category-text'>Legs</h1>
              <div id='cal-legs' className='category-transform' onClick={() => this.props.getBodyType('legs')}>
              </div>
              </Link>
            </div>
            <div className='category-container'>
              <Link to='/routine'>
              <h1 className='category-text'>Back</h1>
              <div id='cal-back' className='category-transform' onClick={() => this.props.getBodyType('back')}>
              </div>
              </Link>
            </div>
            <div className='category-container'>
              <Link to='/routine'>
              <h1 className='category-text'>Delts</h1>
              <div id='cal-delts' className='category-transform' onClick={() => this.props.getBodyType('delts')}>
              </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    )
  }

}

export default Categories
