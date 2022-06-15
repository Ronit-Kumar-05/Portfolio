import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero2 from '../Components/Hero2'
import PricingCard from '../Components/PricingCard'
import Work from '../Components/Work'

const Project = () => {
  return (
    <>
      <Navbar />
      <Hero2 heading="PRROJECTS." text="Some of my RECENT WORK" />{' '}
      {/*IN THIS LINE heading is a variable and PROJECTS is the value for the variable */}
      <Work />
      <PricingCard />
      <Footer />
    </>
  )
}

export default Project
