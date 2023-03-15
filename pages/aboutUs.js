import React from 'react';
import NavBar from '../src/components/NavBar';
import HeroAbout from '../src/components/HeroAbout';
import OurVision from '../src/components/OurVision';
import Team from '../src/components/Team';
import NewsLetter from '../src/components/NewsLetter';
import Footer from '../src/components/Footer'
import PopUp from '../src/components/Popup';

const aboutUs = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <main className="main overflow-hidden">
        <PopUp/>
        <HeroAbout />
        <OurVision />
        <Team />
        <NewsLetter />
      </main>
      <Footer />
    </div>
  )
}

export default aboutUs;