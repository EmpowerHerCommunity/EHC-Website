import React from 'react';
import NavBar from '../src/components/NavBar';
import Hero from '../src/components/Hero';
import Cards from '../src/components/Cards';
import Footer from '../src/components/Footer';

const Volunteer = () => {
  return (
    <div className='overflow-hidden'>
      <NavBar />
      <main className="main overflow-hidden bg-primary bg-opacity-10">
      <Hero />
      <Cards />
      </main>
      <Footer />
    </div>
  )
}

export default Volunteer