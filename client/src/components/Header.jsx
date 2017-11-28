import React from 'react'
import { NavLink } from 'react-router-dom'

// Header component. Has conditional rendering for login.

function Header(props){
  return (
    <header>
      <div className='logo'/>
      {props.auth ? (
        <nav>
          <NavLink exact to='/'><div className="name"></div></NavLink>
          <ul>
            <li>
              <NavLink exact to='/'>HOME</NavLink>
            </li>
            <li><NavLink exact to='/profile' >PROFILE</NavLink></li>
            <li><NavLink exact to='/login' onClick={() => props.logout()}>LOGOUT</NavLink></li>
          </ul>
        </nav>
      ) : (
        <nav>
          <NavLink exact to='/'><div className="name"></div></NavLink>
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
