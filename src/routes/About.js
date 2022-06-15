import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Hero2 from '../Components/Hero2';
import AboutContent from '../Components/AboutContent';

const About = () => {
  return (
    <>
    <Navbar />
    <Hero2 heading="ABOUT." text="Im a friendly Front-End Developer"/>
    <AboutContent />
    <Footer />
    </>
  )
}

export default About
