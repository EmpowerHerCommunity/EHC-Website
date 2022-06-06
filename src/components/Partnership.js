import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';

const Partnership = () => {

  useEffect(() => {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, []);

  return (
    <div className='p-20'>
      <h2 className='patnership-title font-normal font-bold md:text-5xl text-2xl text-center mb-8'>In Partnership With</h2>
      <div className='grid justify-center grid-cols-3 gap-4'>
        <div data-aos='fade-up-right'><Image src='/partnership.jpg' width='313px' height='183px' alt='partnership' /></div>
        <div data-aos='fade-down'><Image src='/partnership.jpg' width='313px' height='183px' alt='partnership' /></div>
        <div data-aos='fade-up-left'><Image src='/partnership.jpg' width='313px' height='183px' alt='partnership' /></div>
        <div data-aos='fade-down-right'><Image src='/partnership.jpg' width='313px' height='183px' alt='partnership' /></div>
        <div data-aos='fade-up'><Image src='/partnership.jpg' width='313px' height='183px' alt='partnership' /></div>
        <div data-aos='fade-down-left'><Image src='/partnership.jpg' width='313px' height='183px' alt='partnership' /></div>
      </div>
    </div>
  )
}

export default Partnership