import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';

const Description = () => {

  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <section className="py-12">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        <div className=''>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
            <div data-aos='fade-down'>
              <div className="relative px-10 py-14 z-5">
                <div className="absolute top-0 left-0">
                  <Image src='/hero-about-up.png' width='130px' height='130px' />
                </div>
                <div className="absolute bottom-0 right-0">
                  <Image src='/hero-about-down.png' width='130px' height='130px' />
                </div>
                <Image src='/events/group.png' width='636px' height='405px' />
              </div>
            </div>
            <div>
              <div className="relative mb-8 max-w-max" data-aos='fade-right'>
                <h2 className='hero-h2 font-normal text-dark md:text-5xl text-4xl font-bold max-w-max'>Who Are We?</h2>
                <hr className="border-0 h-1 w-3/5 absolute bottom-0 left-0 bg-yellow" />
              </div>
              <p className='hero-paragraph font-normal md:text-xl text-2xl text-dark md:leading-6 leading-8 mb-4' data-aos='fade-up'>
                The Empower Her Community is a tech-based community focused on training and promoting women in the field of information technology for free. We aim to spread awareness for opportunities in information technology and incorporate as many women as possible.
              </p>
              <div className='leading-6 mt-2 mb-12'>
                <button className='bg-primary py-3 px-4 border border-primary hover:border-transparent w-44'>
                  <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdiqxcF-QKi9bf97M6XaNUEmr1dc-5wOLpeAJqNWaCtRjTb5A/viewform'>
                    <a target='_blank'>
                      <span className="text-white text-xl"> Join Us Today </span>
                    </a>
                  </Link>
                </button>
              </div>
              <div className='flex items-end gap-8' data-aos='fade-up-right'>
                <div>
                  <Image src='/1.png' width='36px' height='36px' />
                  <p className="text-4xl md:text-5xl text-primary font-semibold leading-5 mt-6">
                    700+ <br />
                    <span className='text-base text-dark font-normal'>Impacted</span>
                  </p>
                </div>
                <div>
                  <Image src='/2.png' width='50px' height='44px' />
                  <p className="text-4xl md:text-5xl text-primary font-semibold leading-5 mt-6">
                    1000+ <br />
                    <span className='text-base text-dark font-normal'>Mentored</span>
                  </p>
                </div>
                <div>
                  <Image src='/3.png' width='36px' height='36px' />
                  <p className="text-4xl md:text-5xl text-primary font-semibold leading-5 mt-6">
                    1000+ <br />
                    <span className='text-base text-dark font-normal'>Community Members</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description;




