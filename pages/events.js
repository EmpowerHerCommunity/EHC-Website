import React from "react";
import Footer from "../src/components/Footer";
import HeroEvents from "../src/components/HeroEvents";
import NavBar from "../src/components/NavBar";
import PastEvents from "../src/components/PastEvents";
import UpcomingEvents from "../src/components/UpcomingEvents";
import Head from "next/head";

const events = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <meta charSet="UTF-8" />
        <title>"Empower Her Community"</title>
        <meta
          name="title"
          property="og:title"
          content="Empower Her Community"
        />
        <link rel="icon" href="/logo.png" />
        <meta
          name="image"
          property="og:image"
          content="https://empower-her-community.vercel.app/preview.png"
        />
        <meta name="twitter:title" content="Empower Her Community" />
        <meta
          name="twitter:description"
          content="We are a female community seeing to the growth and progress of all women in tech worldwide"
        />
        <meta name="twitter:image" content="/preview.png" />
        <meta
          name="description"
          content="We are a female community seeing to the growth and progress of all women in tech worldwide"
        />
        <meta
          property="og:site_name"
          content="https://empower-her-community.vercel.app/"
        />
        <meta
          property="og:image:secure_url"
          content="https://empower-her-community.vercel.app/preview.png"
        />
      </Head>
      <NavBar />
      <main className="main overflow-hidden">
        <HeroEvents />
        <PastEvents />
        <UpcomingEvents />
      </main>
      <Footer />
    </div>
  );
};

export default events;
