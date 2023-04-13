import React from "react";
import NavBar from "../src/components/NavBar";
import HeroAbout from "../src/components/HeroAbout";
import OurVision from "../src/components/OurVision";
import Team from "../src/components/Team";
import NewsLetter from "../src/components/NewsLetter";
import Footer from "../src/components/Footer";
import Head from "next/head";

const aboutUs = () => {
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
        <HeroAbout />
        <OurVision />
        <Team />
        <NewsLetter />
      </main>
      <Footer />
    </div>
  );
};

export default aboutUs;
