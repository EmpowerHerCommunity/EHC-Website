import { useState, useRef } from "react";
import NavBar from "../src/components/NavBar";
import Form from "../src/components/Form";
import ContactUs from "../src/components/ContactUs";
import Footer from "../src/components/Footer";
import Head from "next/head";

const Contact = () => {
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

        <meta
          name="image"
          property="og:image"
          content="https://empower-her-community.vercel.app/preview.png"
        />
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
      <main className="main bg-light">
        <div className="container xl:max-w-screen-xl px-4 mx-auto py-24 relative">
          <div className="">
            <img
              src="/contact-dots.svg"
              alt="dot"
              className="absolute top-[20px] left-[5px] sm:left-[-5px] ml-4"
            />
          </div>
          <div className="flex flex-col-reverse lg:flex-row gap-14 lg:gap-36 relative mt-16">
            <div className="w-full lg:w-6/12 lg:flex-auto">
              <Form />
            </div>
            <div className="w-full lg:w-5/12 lg:flex-auto">
              <ContactUs />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
