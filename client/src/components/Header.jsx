import React from 'react'
import { Link } from 'react-router-dom'

function Header (props) {
  return (
    <header>
      <div className='logo'/>
      {props.auth ? (
        <nav>
          <div className="name"></div>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/profile'>PROFILE</Link></li>
            <li><Link to='/login' className='header-links' onClick={() => props.logout()}>LOGOUT</Link></li>
          </ul>
        </nav>
      ) : (
        <nav>
          <div className="name"></div>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/login'>LOGIN</Link></li>
            <li><Link to='/register'>REGISTER</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
