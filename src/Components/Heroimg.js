import React from 'react'
import './Heroimg.css';
import {Link} from 'react-router-dom';
import About11 from '../Assets/back1.png';

const Heroimg = () => {
  return (
    <>
        <div className="hero">
            <div className="mask">
            <img src={About11} className="into-img" alt='IntroImg'/>
            </div>
            <div className="content">
                <p>Hi, I'M A FRONT-END DEVELOPER.</p>
                <h1>Web Developer || App Developer</h1>
                <div>
                    <Link to="/Project" className='btn'>
                    Projects
                    </Link>
                    <Link to="/Contact" className='btn btn-light'>
                    Contact
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Heroimg;