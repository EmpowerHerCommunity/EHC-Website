import React from 'react';
import NavBar from '../src/components/NavBar';
import HeroAbout from '../src/components/HeroAbout';
import OurVision from '../src/components/OurVision';
import OurMission from '../src/components/OurMission';
import Team from '../src/components/Team';
import NewsLetter from '../src/components/NewsLetter';
import Footer from '../src/components/Footer'

const aboutUs = () => {
  return (
    <>
        <NavBar />
        <HeroAbout />
        <OurVision />
        <OurMission />
        <Team />
        <NewsLetter />
        <Footer />
    
    </>
  )
}

export default aboutUs;