import React from 'react';
import { Link } from 'react-router-dom';

function Home(props){
  return (
    <div className="home">
      <h1 id="name">iLIFT</h1>
      <h3 id="title">Where would you like to start today?</h3>
      <div className='button'>
        <Link className='button2' to="/categories" style={{ textDecoration: 'none'}} onClick={() => props.getExerciseType("weight")}>Weights</Link>
        <Link className='button3' to="/categories" style={{ textDecoration: 'none' }} onClick={() => props.getExerciseType("calisthenics")}>Calisthenics</Link>
      </div>
    </div>
  );
};

export default Home;
