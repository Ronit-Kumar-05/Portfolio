import React from 'react';
import { useState } from 'react';
import '../Components/NavBar.css';
import { Link } from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa';
import logo from '../Assets/logo.jpg';

const Navbar = () => {

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);


const [color,setColor] = useState(false);
const changeColor =()=>{
    if(window.scrollY >= 100){
        setColor(true);
    }
    else{
        setColor(false);
    }
};


window.addEventListener("scroll",changeColor);


  return (
    <>
      <div className={color ? "header header-bg":"header"}>    
      <Link to="/"><img src={logo} alt="" width="60" height="50" /></Link>
        <Link to="/"><h1>Ronit_Singh</h1></Link>
        <ul className={click ? "nav-menu active" :"nav-menu"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Project">Project</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <div className="hamburger" onClick={handleClick}>

        {click ? (
            <FaTimes size={20} style={{ color :
            "#fff" }} />
        ) : (
            <FaBars size={20} style={{color : "#fff"
            }} />
        )}

        </div>
      </div>
    </>
  )
}

export default Navbar
