import React from 'react';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';

const HeroHome = () => {
  return (
    <div className={styles.hero}>
      <div className='flex justify-between lg:px-32 lg:py-32 sm:px-12 sm:py-12 p-7' >
        <div>
          <article>
            <div className='lg:text-l w-96 h-6 font-normal uppercase tracking-widest'>
              A female-oriented tech community
            </div> 
            <div className='lg:text-7xl sm:text-4xl text-4xl text-fuchsia-800'>
              Empower Her Community
            </div> 
            <div className='lg:text-xl my-8 w-96 h-20'>
              We are a female community seeing to the growth and progress of all women in tech worldwide
            </div>

          <div> 
            <button className='bg-transparent py-2 px-4 border border-2 border-purple-400 hover:border-transparent rounded w-40 mr-10'>
              <span className={styles.span1}>
                Support Us 
              </span>
            </button>

             
              <button className='bg-fuchsia-900  py-2 px-4  hover:border-transparent rounded w-40'>
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
        <div className='hidden sm:block bg-slate-100 rounded-r-lg'>
          <Image src='/herogirl.png' width='548px' height='539px' alt ='' />
        </div>
      </div>
    </div>
  )
}

export default HeroHome