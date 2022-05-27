import React from 'react';
import Image from 'next/image';

const Events = () => {
  return (
    <div className='px-12 py-20 bg-fuchsia-900'>
      <div>Events</div>
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
          <h2>Webinar</h2>
          A webinar to address the disinterest of girls in information technology and enlighten women on the need to transition into the technology space. <br />
          <span>READ MORE</span>
        </div>
        <div>
        <h2>Bootcamp 1.0</h2>
        The EmpowerHer Community Bootcamp was a free bootcamp for women between the ages of 18-40 years. The bootcamp ran for a course of 1 month.<br />
          <span>READ MORE</span>
        </div>
        <div>
        <h2>Outreach</h2>
        We had a three-day outreach in different universities in Nigeria and Ghana. We aim to promote the assimilation of information technology. <br />
          <span>READ MORE</span>
        </div>
      </div>
    </div>
  )
}

export default Events