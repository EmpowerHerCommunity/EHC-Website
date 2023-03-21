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
        <div className='container mx-auto'>
          <div className="relative mb-12 max-w-max mx-auto">
            <h2 className='patnership-title font-bold md:text-5xl text-4xl text-dark text-center'>In Partnership With</h2>
            <hr className="border-0 h-1 w-3/5 absolute bottom-0 left-0 bg-yellow" />
          </div>
          <div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto'>
             <div className=' flex items-center justify-center border-2 border-primary bg-white h-full w-full'>
             <Image src='/sponsor/GetEquityBlue.png'  className="filter grayscale brightness-50" width='200px' height='44px' alt='get equity' data-aos='fade-up-right' />
            </div> 

            <div className=' flex items-center justify-center border-2 border-primary bg-black h-64 w-full '>
             <Image src='/sponsor/NTIT.png' width='58px' height='51px' alt='NTIT' data-aos='fade-up-right' />
            </div>

            <div className=' flex items-center justify-center border-2 border-primary bg-white  h-64 w-full'>
             <Image src='/sponsor/check.jpg' width='58px' height='51px' alt='check' data-aos='fade-up-right' />
            </div>

            <div className=' flex items-center justify-center border-2 border-primary bg-black  h-64 w-full'>
             <Image src='/sponsor/NTIT.png' width='58px' height='51px' alt='get equity' data-aos='fade-up-right' />
            </div>

            <div className=' flex items-center justify-center border-2 border-primary bg-white  h-64 w-full'>
             <Image src='/sponsor/check.jpg' width='58px' height='51px' alt='get equity' data-aos='fade-up-right' />
            </div>

            <div className=' flex items-center justify-center border-2 border-primary bg-black  h-64 w-full'>
             <Image src='/sponsor/GetEquitywhite.png' width='200px' height='44px' alt='get equity' data-aos='fade-up-right' />
            </div>
          </div>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partnership