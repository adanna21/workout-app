import React from 'react'

import { Link } from 'react-router-dom'

function Header (props) {
  return (
    <header>
      <div className='logo' />
      {props.auth ? (
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            {/* <li><Link to='/routine' style={{textDecoration: 'none'}}>Add Routine</Link></li> */}
            <li><Link to='/login' className='header-links' onClick={() => props.logout()}>Logout</Link></li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
