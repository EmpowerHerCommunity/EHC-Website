import React, { useEffect } from 'react';
import AOS from 'aos';

const OurVision = () => {

  useEffect(() => {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, []);

  return (
    <div className='our-vision md:grid grid-cols-2 gap-8 m-16'>
      <div data-aos='zoom-in'>
          <div className='purple md:mb-8 mb-2'>
            <img src='/purple.png' alt='' />
          </div>
        <h2 className='font-bold md:text-4xl text-3xl w-60 mb-4'>Our Vision</h2>
        <p className='font-normal md:text-xl text-2xl md:leading-6 mb-4'>
        To make the field of information technology accessible to all women from all works of life.
        We aim at promoting the inclusin of women regardless of their age, background or financial status into the tech industry.
        </p>
      </div>
      <div data-aos='fade-right'>
        <img src='/vision.png' alt='' />
      </div>
      <div className='md:mt-0 mt-4' data-aos='fade-left'>
        <img src='/vision.png' alt='' />
      </div>
      <div data-aos='zoom-out'>
          <div className='purple mt-8 md:mb-8 mb-2'>
            <img src='/purple.png' alt='' />
          </div>
        <h2 className='font-bold md:text-4xl text-3xl mb-4'> Our Mission </h2>
        <p className='font-normal md:text-xl text-2xl md:leading-6'>To build a community that focuses on providing opportunites for women transitioning into information technology. A community where Information Technology is perceived accessible to all women regardless of their age or background.</p>
      </div>
    </div>
  )
}

export default OurVision