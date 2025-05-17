import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../src/components/NavBar";
import HeroHome from "../src/components/HeroHome";
import Description from "../src/components/Description";
import Events from "../src/components/Events";
import Partnership from "../src/components/Partnership";
import Testimonial from "../src/components/Testimonial";
import Footer from "../src/components/Footer";
import PopUp from "../src/components/Popup";
import AnniversaryCountdown from "../src/components/AnniversaryCountdown"
// import SpotlightPreview from '../src/components/ui/spotlight-demo';

export default function Home() {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 12000);
  }, []);

  const closePopup = () => {
    setPopup(false);
  };
  return (
    <div className="overflow-hidden">
    <Head>
        <title>Empower Her Community</title>
        <meta
          name="description"
          content="We are a female community seeing to the growth and progress of all women in tech worldwide"
        />

        <meta
          property="og:url"
          content="https://empower-her-community.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Empower Her Community" />
        <meta
          property="og:description"
          content="We are a female community seeing to the growth and progress of all women in tech worldwide"
        />
        <meta
          property="og:image"
          content="https://empower-her-community.vercel.app/preview.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="empower-her-community.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://empower-her-community.vercel.app/"
        />
        <meta name="twitter:title" content="Empower Her Community" />
        <meta
          name="twitter:description"
          content="We are a female community seeing to the growth and progress of all women in tech worldwide"
        />
        <meta
          name="twitter:image"
          content="https://empower-her-community.vercel.app/preview.png"
        />
      </Head>

      {popup && <PopUp closePopup={closePopup}></PopUp>}
      <NavBar />
      <main className="main overflow-hidden">
        <HeroHome />
      <AnniversaryCountdown  />
       {/* <SpotlightPreview /> */}
        <Description />
        <Events />
        <Partnership />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
