import React from 'react'
import { NavLink } from 'react-router-dom'

function Header (props) {
  return (
    <header>
      <div className='logo'/>
      {props.auth ? (
        <nav>
          <div className="name"></div>
          <ul>
            <li>
              <NavLink exact to='/' >HOME</NavLink>
            </li>
            <li><NavLink exact to='/profile' >PROFILE</NavLink></li>
            {/* <li><NavLink to='/routine' style={{textDecoration: 'none'}}>Add Routine</NavLink></li> */}
            <li><NavLink exact to='/login' onClick={() => props.logout()}>LOGOUT</NavLink></li>
          </ul>
        </nav>
      ) : (
        <nav>
          <div className="name"></div>
          <ul>
            <li>
              <NavLink exact to='/' activeClassName='active'>
                HOME
              </NavLink>
            </li>
            <li><NavLink exact to='/login'>LOGIN</NavLink></li>
            <li><NavLink exact to='/register'>REGISTER</NavLink></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
