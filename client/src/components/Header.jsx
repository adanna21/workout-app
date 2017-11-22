
import React from 'react'

import { Link } from 'react-router-dom'


const Header = (props) => {
  return (
    <header>
       <div className="logo"></div>
      {props.user ?
        <nav>
          <ul>
            <li><Link to='/'style={{ textDecoration: 'none'}} >Home</Link></li>
            <li><Link to='/login' style={{ textDecoration: 'none'}}>Logout</Link></li>
            <li><Link to='/workouts' style={{ textDecoration: 'none'}}>Workouts</Link></li>
            <li><Link to='/routine' style={{ textDecoration: 'none'}}>Add Routine</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to='/' style={{ textDecoration: 'none'}}>Home</Link></li>
            <li><Link to='/login' style={{ textDecoration: 'none'}}>Login</Link></li>
            <li><Link to='/register' style={{ textDecoration: 'none'}}>Register</Link></li>
          </ul>
        </nav>
      }

    </header>
  )
}

export default Header
