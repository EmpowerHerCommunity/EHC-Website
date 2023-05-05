import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';

const OurVision = () => {

  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <section className="text-justify">
      <div className="container xl:max-w-screen-xl mx-auto px-4 py-16 ">
        <div className='our-vision md:grid grid-cols-2 gap-32' id='vision'>
          <div data-aos='zoom-in'>
            <div className='purple md:mb-8 mb-2'>
              <Image src='/eye.png' width={90} height={90} alt='our vision icon' />
            </div>
            <h2 className='font-bold md:text-4xl text-3xl w-60 mb-4'>Our Vision</h2>
            <p className='font-normal md:text-xl leading-9 text-2xl md:leading-8 mb-4'>
              To make the field of information technology accessible to all women from all works of life.
              We aim at promoting the inclusion of women regardless of their age, background or financial status into the tech industry.
            </p>
          </div>
          <div data-aos='fade-right' >
          <Image src='/woman.jpg' alt='woman' width={600} height={300} className='md:block hidden'/>

          </div>
          <div className='md:mt-0 mt-4 md:block ' data-aos='fade-left'>
          <Image src='/group.jpg' alt='woman' width={600} height={600} />

          </div>
          <div data-aos='zoom-out' className='' id='mission'>
            <div className='purple mt-8 md:mb-8 mb-2'>
              <Image src='/mission.png' width={90} height={90} alt='our mission icon' />
            </div>
            <h2 className='font-bold md:text-4xl text-3xl mb-4'> Our Mission </h2>
            <p className='font-normal md:text-xl leading-9 text-2xl md:leading-8'>To build a community that focuses on providing opportunites for women transitioning into information technology. A community where Information Technology is perceived accessible to all women regardless of their age or background.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurVision