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
        <meta name="title" property="og:title" content="Empower Her Community" />
        <link rel="icon" href="/logo.png" />
        <meta name="image" property="og:image" content="/preview.png"/>
        <meta name="twitter:title" content="Empower Her Community" />
        <meta name="twitter:description" content="We are a female community seeing to the growth and progress of all women in tech worldwide" />
        <meta name="twitter:image" content="/preview.png" />
        <meta name="description" property="og:article:section" content="We are a female community seeing to the growth and progress of all women in tech worldwide" />
        <meta
          property="og:url"
          content="https://empower-her-community.vercel.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="description"
          property="og:description"
          content="We are a female community seeing to the growth and progress of all women in tech worldwide"
        />
        <meta name="twitter:image:alt" content="logo" />
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