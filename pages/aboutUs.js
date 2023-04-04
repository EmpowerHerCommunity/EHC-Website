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
        <title>Empower Her Community Website</title>
        <meta
          name="description"
          content="Empower Her Community is a female oriented tech community of 5,000+ women dedicated to fostering gender diversity in tech. We strive to make the industry more accessible by providing training, mentorship, and raising awareness of opportunities for women in tech."
        />
        <link rel="icon" href="/logo.png" />
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
