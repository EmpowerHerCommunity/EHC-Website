import React, { useEffect } from 'react';
import AOS from 'aos';


const HeroAbout = () => {

  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-primary bg-opacity-10">
      <div className="container mx-auto px-4">
        <div className='grid md:grid-cols-2 md:m-12 md:p-16'>
          <div className=' hero-about-list text-dark font-normal md:text-lg text-3xl  leading-7' data-aos='fade-right'>
            <img src='/contact-dots.svg' alt='' />
            <ul className='ml-8 mt-8'>
              <li className='font-semibold my-1'> About Us. </li>
              <li className='font-semibold my-1'> Our Vision. </li>
              <li className='font-semibold my-1'>  Our Mission. </li>
              <li className='font-semibold my-1'>   The Team. </li>
            </ul>
          </div>
          <div>
            <h2 className='md:text-5xl text-4xl font-bold text-center my-10 w-fit  relative'>About Us <span><img src='/line2.png' alt='' /></span></h2>
            <p className='font-normal md:text-xl text-2xl mb-4 md:leading-6' data-aos='fade-left'>
              The <span className='text-purple-800'>EmpowerHer Community</span> is a female oriented tech community which focuses on training and promoting women in the field of information technology.

              We aim to promote and spread more awareness for opportunities in information technology and incorporate as many women as possible. Having started our journey in May 2019, we have not backed down in helping women transition smoothly into the Information Technology industry.

              We have trained more than 700 women all across the globe, we aim to have trained 10,000 women by the end of 2022.
            </p>
          </div>
        </div>
        <div className='h-4/5' data-aos='zoom-in'> <img src='/events2.jpg' alt='' className='w-full h-4/5' /></div>
      </div>
    </section>
  )
}
export default HeroAbout;
