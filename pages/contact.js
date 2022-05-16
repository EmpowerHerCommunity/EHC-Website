import React from 'react';
import NavBar from '../src/components/NavBar';
import Form from '../src/components/Form';
import ContactUs from '../src/components/ContactUs';
import Footer from '../src/components/Footer';

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <NavBar />
    <Form />
    <ContactUs />
    <Footer />
    </div>
  )
}

export default Contact