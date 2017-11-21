import React from 'react';
import {Route, Link} from 'react-router-dom';
const Home = () => {
  return (
    <div className="home">
      <h1>LIFT</h1>
      <h3>Where would you like to start today?</h3>
      <div className='button'>
        <button className="button2"><Link to="/categories">Weights</Link></button>
        <button className="button3">Calisthenics</button>
      </div>
    </div>
  );
};

export default Home;
