import React from 'react'

 const HeroAbout = () => {
  return (
    <div className='hero-about p-8'> 
    <div className='grid md:grid-cols-2 md:m-12 md:p-16'>
      <div className=' hero-about-list font-normal text-lg leading-7'>
        <img src='/contact-dots.svg' alt='' />
        <ul className='ml-8 mt-8'>
          <li><b> About Us. </b></li>
          <li> <b>Our Vision. </b></li>
          <li><b>  Our Mission. </b></li>
          <li> <b>  The Team. </b></li>
        </ul>
      </div>
      <div>
        <h2 className='md:text-5xl text-3xl text-center my-10 w-fit  relative'>About Us <span><img src='/line2.png' alt='' /></span></h2>
        <p className='font-normal md:text-xl leading-6 '>
        The <span className='text-purple-800'>EmpowerHer Community</span> is a female oriented tech community which focuses on training and promoting women in the field of information technology.

We aim to promote and spread more awareness for opportunities in information technology and incorporate as many women as possible. Having started our journey in May 2019, we have not backed down in helping women transition smoothly into the Information Technology industry. 

We have trained more than 700 women all across the globe, we aim to have trained 10,000 women by the end of 2022. 
        </p>
      </div>
    </div>
    <div className='h-4/5'> <img src='/events2.jpg' alt='' className='w-full h-4/5'/></div>
    </div>
  )
}
export default HeroAbout;
