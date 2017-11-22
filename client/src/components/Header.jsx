
import React from 'react'

import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header>
      
      <div className='logo'><img alt='' height='150'src='https://lh3.googleusercontent.com/oz_OOHZBFCjRn3g1Gpom5SgkDNLj1c_TG6Q9ToqP7m6SkKYt0ebGB0LyCvsuthLnyjQ=w300' /></div>
      {props.auth ?
        <nav>
          <ul>
            <li><Link to='/' style={{ textDecoration: 'none'}}>Home</Link></li>
            <li><span className='logout' style={{ textDecoration: 'none'}} onClick={props.logout}>Logout</span></li>
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
