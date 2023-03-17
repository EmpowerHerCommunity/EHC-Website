import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';


const Events = () => {

  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-primary py-20 ">
      <div className="container xl:max-w-screen-xl mx-auto px-4 relative">
        <div className="absolute top-[0px] left-[5px] sm:left-[-15px] ml-4">
          <Image src='/white-dots-up.png' width='135px' height='135px' />
        </div>
        <div className='pl-11 lg:pt-7 pt-20'>

          <div className="relative mb-8 max-w-max mx-auto">
            <h2 className='text-white font-normal md:text-5xl text-4xl text-center font-bold'>Events</h2>
            <hr className="border-0 h-1 w-4/5 absolute bottom-0 left-0 bg-yellow" />
          </div>
          <div className='flex lg:flex-row flex-col  justify-between w-12/12 '>
            <div data-aos='fade-up' className='mb-8 text-center md:text-left lg:w-4/12 w-11/12'>
              <div data-aos='fade-down'>
                <Image src='/web.jpg' width='300px' height='300px'  />
              </div>
              <h2 className='text-white text-3xl leading-10 mb-2 mt-4 font-medium'>Webinar</h2>
              <p className='text-white font-normal md:text-base text-lg tracking-wider text-justify lg:w-9/12 w-11/12 h-40'>
                A webinar to address the disinterest of girls in information technology and enlighten women on the need to transition into the technology space. <br />
                <Link href='/aboutUs'>
                  <a>
                    <span className='read-more font-normal md:text-lg leading-6 md:flex justify-end mt-6 text-lg'>READ MORE...</span>
                  </a>
                </Link>
              </p>
            </div>
            <div data-aos='fade-up' className='mb-8 text-center md:text-left lg:w-4/12 w-11/12'>
              <div data-aos='fade-down'>
                <Image src='/bootcamp.jpg' width='300px' height='300px' />
              </div>
              <h2 className='text-white text-3xl leading-10 mb-2 mt-4 font-medium'>Bootcamp 1.0</h2>
              <p className='text-white font-normal md:text-base text-lg tracking-wider text-justify lg:w-9/12 w-11/12 '>
                The Empower Her Community Bootcamp was a free bootcamp for women between the ages of 18-40 years. The bootcamp ran for a course of 1 month.<br />
                <Link href='/aboutUs'>
                  <a>
                    <span className='read-more font-normal text-lg leading-6 md:flex justify-end mt-6'>READ MORE...</span>
                  </a>
                </Link>
              </p>
            </div>
            <div data-aos='fade-up' className='mb-8 text-center md:text-left lg:w-4/12 w-11/12'>
              <div data-aos='fade-down'>
                <Image src='/nontechb.jpg' width='300px' height='300px' />
              </div>
              <h2 className='text-white text-3xl leading-10 mb-2 mt-4 font-medium'>Non Technical Bootcamp</h2>
              <p className='text-white font-normal md:text-base text-lg tracking-wider text-justify w-11/12 lg:w-9/12 h-40'>
                {/* We had a three-day outreach in different universities in Nigeria and Ghana. We aim to promote the assimilation of information technology. <br /> */}
                Empower Her Community in collaboration with Non-Tech In Tech organized a 2 months bootcamp to train women in non technical roles.<br />
                <Link href='/aboutUs'>
                  <a>
                    <span className='read-more font-normal text-lg  leading-6 md:flex justify-end mt-6'>READ MORE...</span>
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events