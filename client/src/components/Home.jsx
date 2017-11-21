import React from 'react';
import { Link } from 'react-router-dom';

function Home(props){
  return (
    <div className="home">
      <h1>LIFT</h1>
      <h3>Where would you like to start today?</h3>
      <div className='button'>
        <Link className='button2' to="/categories" onClick={() => props.getExerciseType("weight")}>Weights</Link>
        <Link className='button3' to="/categories" onClick={() => props.getExerciseType("calisthenics")}>Calisthenics</Link>
      </div>
    </div>
  );
};

export default Home;
