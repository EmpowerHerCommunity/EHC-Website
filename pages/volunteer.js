import React from "react";
import NavBar from "../src/components/NavBar";
import Hero from "../src/components/Hero";
import Cards from "../src/components/Cards";
import Footer from "../src/components/Footer";
import Head from "next/head";

const Volunteer = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Empower Her Community Website</title>
        <meta
          name="description"
          content="You can volunteer to work with us. All it takes is being motivated, having an interest for women in tech and having experience in a related field."
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <NavBar />
      <main className="main overflow-hidden bg-primary bg-opacity-10">
        <Hero />
        <Cards />
      </main>
      <Footer />
    </div>
  );
};

export default Volunteer;
