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

      {popup && <PopUp closePopup={closePopup}></PopUp>}
      <NavBar />
      <main className="main overflow-hidden">
        <HeroHome />
        <Description />
        <Events />
        <Partnership />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
