import {useState, useRef} from 'react';
import NavBar from '../src/components/NavBar';
import Form from '../src/components/Form';
import ContactUs from '../src/components/ContactUs';
import Footer from '../src/components/Footer';
import Head from 'next/head';

const Contact = () => {

  return (
    <div className='overflow-hidden'>
        <Head>
        <title>Empower Her Community Website</title>
        <meta
          name="description"
          content="A Technology-based community focused on training and promoting women in the field of information technology, so as to help them advance in their career."
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <NavBar />
      <main className="main bg-light">
        <div className="container xl:max-w-screen-xl px-4 mx-auto py-24 relative">
          <div className=''> 
          <img src="/contact-dots.svg" alt="" className="absolute top-[20px] left-[5px] sm:left-[-5px] ml-4" />
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
  )
}

export default Contact