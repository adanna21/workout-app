
import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">logo here!!!!</div>
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
