import React from 'react';
import NavBar from '../src/components/NavBar';
import HeroAbout from '../src/components/HeroAbout';
import OurVision from '../src/components/OurVision';
import Team from '../src/components/Team';
import NewsLetter from '../src/components/NewsLetter';
import Footer from '../src/components/Footer'

const aboutUs = () => {
  return (
    <>
        <NavBar />
        <HeroAbout />
        <OurVision />
        <Team />
        <NewsLetter />
        <Footer />
    
    </>
  )
}

export default aboutUs;