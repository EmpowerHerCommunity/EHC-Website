import React, { useEffect } from 'react'
import AOS from 'aos';


const ContactUs = () => {

  useEffect(() => {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, []);

  return (
    <div className='text-dark max-w-2xl m-4'>
      <h1 className="text-4xl md:text-5xl font-bold md:my-5" data-aos='zoom-out-up'>Contact Us</h1>
      <p className="md:text-xl text-2xl my-5" data-aos='zoom-out-down'>
        Ask us anything, we are always eager to answer any questions you may have.
      </p>
      <img src="/contact-image.svg" alt="phone" className="hidden lg:inline-block my-5" />
    </div>
  )
}

export default ContactUs