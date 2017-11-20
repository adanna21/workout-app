
import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo"><img height="150"src="https://lh3.googleusercontent.com/oz_OOHZBFCjRn3g1Gpom5SgkDNLj1c_TG6Q9ToqP7m6SkKYt0ebGB0LyCvsuthLnyjQ=w300" /></div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/workouts">Workouts</Link></li>
          <li><Link to="/routine">Add Routine</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
