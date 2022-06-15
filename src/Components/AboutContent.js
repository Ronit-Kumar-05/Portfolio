import React from 'react';
import './AboutContent.css';
import { Link } from 'react-router-dom';
import About12 from '../Assets/About12.jpeg';
import About2 from '../Assets/About2.jpeg';

const AboutContent = () => {
  return (
    <>
    <div className="about">
      <div className="left">
        <h1>WHO AM I?</h1>
        <p>Hello There</p>
        <span>Myself Ronit Singh. </span><br />
        <span>For Any Work Click Below!!</span>
        <Link to="/Contact"><button className='btn'>Contact</button></Link>
      </div>

      
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={About12} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={About2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutContent
