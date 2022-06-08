import React,{ useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import  AOS  from 'aos';

const HeroHome = () => {

  useEffect(() => {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, []);

  return (
    <div className={styles.hero} >
      <div className='flex justify-between lg:px-32 lg:py-32 sm:px-12 sm:py-12 p-7' >
        <div data-aos='fade-left'>
          <article>
            <div className='herohome-text lg:text-l  w-96 h-6 font-normal uppercase tracking-widest font-light'>
              A female-oriented tech community
            </div> 
            <div className='herohome-title md:text-7xl  text-5xl font-bold'>
              Empower Her Community
            </div> 
            <div className=' md:text-xl text-2xl md:my-8 my-4 w-96 md:h-20 h-24'>
              We are a female community seeing to the growth and progress of all women in tech worldwide
            </div>

          <div> 
            <button className='bg-transparent md:py-2 md:px-4 p-8 border border-2 border-purple-400 hover:border-transparent rounded md:w-40 w-56  mr-10'>
              <span className={styles.span1}>
                Support Us 
              </span>
            </button>

             
              <button className='join-btn md:py-2 md:px-4 p-8  hover:border-transparent rounded md:w-40 w-56'>
              <span className={styles.span2}>
                Join Us Today 
              </span>
              </button>
              <div className='mt-24'>
                <Image src='/group2.png' width='137px' height='137px' alt='' />
              </div>
            
            </div>
          </article>
        </div>
         
        <div className='hidden sm:block bg-slate-100 rounded-r-lg h-3/4' data-aos='fade-right'>
          <Image src='/herogirl.png' width='548px' height='539px' alt ='' />
        </div>
      
      </div>
    </div>
  )
}

export default HeroHome