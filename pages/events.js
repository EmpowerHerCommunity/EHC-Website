import React from 'react'
import Footer from '../src/components/Footer';
import HeroEvents from '../src/components/HeroEvents';
import NavBar from '../src/components/NavBar';
import PastEvents from '../src/components/PastEvents';
import UpcomingEvents from '../src/components/UpcomingEvents';

const events = () => {
  return (
    <div className="">
      <NavBar />
      <main className="main overflow-hidden">
        <HeroEvents />
        <PastEvents />
        <UpcomingEvents />        
      </main>
      <Footer />
    </div>
  )
}

export default events;