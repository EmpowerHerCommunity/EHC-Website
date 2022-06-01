import React from 'react';
import Image from 'next/image';

const Events = () => {
  return (
    <div className='md:px-12 px-6 py-20 bg-fuchsia-900'>
      <h2 className='text-white font-normal md:text-5xl text-2xl text-center mb-6 font-bold'>Events</h2>
      <div className='grid  grid-cols-3 gap-4'>
        <div> 
        <Image src='/events1.jpg' width='422px' height='270px' />
        </div>
        <div> 
        <Image src='/events2.jpg' width='422px' height='270px' />
        </div>
        <div> 
        <Image src='/events3.jpg' width='422px' height='270px' />
        </div>
        <div>
          <h2 className='text-white font-normal md:text-3xl leading-10 mb-2 font-bold'>Webinar</h2>
          <p className='text-white font-normal md:text-lg text-sm leading-5 tracking-wider'> 
          A webinar to address the disinterest of girls in information technology and enlighten women on the need to transition into the technology space. <br />
          <span className='read-more font-normal md:text-lg leading-6 md:flex justify-end mt-6 text-sm'>READ MORE...</span>
          </p>
        </div>
        <div>
        <h2 className='text-white font-normal md:text-3xl leading-10 mb-2 font-bold'>Bootcamp 1.0</h2>
        <p className='text-white font-normal md:text-lg text-sm leading-5 tracking-wider'>
        The EmpowerHer Community Bootcamp was a free bootcamp for women between the ages of 18-40 years. The bootcamp ran for a course of 1 month.<br />
          <span className='read-more font-normal md:text-lg text-sm leading-6 md:flex justify-end mt-6'>READ MORE...</span>
        </p>
        </div>
        <div>
        <h2 className='text-white font-normal md:text-3xl leading-10 mb-2 font-bold'>Outreach</h2>
        <p className='text-white font-normal md:text-lg text-sm leading-5 tracking-wider'> 
        We had a three-day outreach in different universities in Nigeria and Ghana. We aim to promote the assimilation of information technology. <br />
          <span className='read-more font-normal md:text-lg text-sm leading-6 md:flex justify-end mt-6'>READ MORE...</span>
        </p>
        </div>
      </div>
    </div>
  )
}

export default Events