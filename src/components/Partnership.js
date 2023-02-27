import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';

const Partnership = () => {

  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <section className="" id="partnership">
      <div className="container xl:max-w-screen-xl mx-auto px-4 relative py-20">
        <div className="absolute top-[30px] right-0 ml-4">
          <Image src='/purple-dots-down.png' width='105px' height='105px' />
        </div>
        <div className=''>
          <div className="relative mb-12 max-w-max mx-auto">
            <h2 className='patnership-title font-normal font-bold md:text-5xl text-4xl text-dark text-center'>In Partnership With</h2>
            <hr className="border-0 h-1 w-3/5 absolute bottom-0 left-0 bg-yellow" />
          </div>
          <div className='grid justify-center grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto'>
            <Image src='/partnership.jpg' width='313px' height='183px' alt='partnership' data-aos='fade-up-right' />
            <Image src='/partnership.jpg' width='313px' height='183px' alt='partnership' data-aos='fade-down' />
            <Image src='/partnership.jpg' width='313px' height='183px' alt='partnership' data-aos='fade-up-left' />
            <Image src='/partnership.jpg' width='313px' height='183px' alt='partnership' data-aos='fade-down-right' />
            <Image src='/partnership.jpg' width='313px' height='183px' alt='partnership' data-aos='fade-up' />
            <Image src='/partnership.jpg' width='313px' height='183px' alt='partnership' data-aos='fade-down-left' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partnership