import React from 'react'
import Footer from '../src/components/Footer';
import HeroEvents from '../src/components/HeroEvents';
import NavBar from '../src/components/NavBar';
import PastEvents from '../src/components/PastEvents';
import UpcomingEvents from '../src/components/UpcomingEvents';
import Head from 'next/head';

const events = () => {
  return (
    <div className="overflow-hidden">
        <Head>
        <title>Empower Her Community Website</title>
        <meta
          name="description"
          content="Since our inception, we have provided a plethora of opportunities for women around the globe to benefit from our interactive sessions, webinars, and bootcamps. These initiatives have empowered countless women, enabling them to gain valuable insights, learn new skills, and connect with like-minded individuals."
        />
        <link rel="icon" href="/logo.png" />
      </Head>
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