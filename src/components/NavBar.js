import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import AOS from 'aos';


const NavBar = () => {

  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  }
  return (
    <div className='w-full'>
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        <nav className='lg:flex items-center flex-wrap lg:flex-nowrap w-full gap-3'>
          <div className='flex' data-aos='zoom-in'>
            <Link href='/'>
              <a className='inline-flex items-center border-none'>
                <Image src='/logo.png' width='91px' height='90px' />
              </a>
            </Link>
            <button className='p-3 rounded lg:hidden text-white ml-auto hover:text-white active:bg-white outline-none'
              onClick={handleClick}>
              <svg
                className='w-10 h-10'
                fill='none'
                stroke='black'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>

          <div className={` ${active ? '' : 'hidden'} w-full lg:inline-flex justify-between lg:w-full`}>
            <div className='lg:inline-flex lg:flex-row lg:w-auto lg:items-center items-start  flex flex-col lg:h-auto w-full'>
              <Link href='/'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-normal items-center justify-start  hover:text-purple-900 md:hover:text-xl text-2xl hover:text-3xl '>
                  Home
                </a>
              </Link>


              <Link href='/aboutUs'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-normal items-center justify-start hover:text-purple-900 md:hover:text-xl text-2xl hover:text-3xl'>
                  About
                </a>
              </Link>


              <Link href='/events'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-normal items-center justify-start  hover:text-purple-900 md:hover:text-xl text-2xl hover:text-3xl'>
                  Events
                </a>
              </Link>


              <Link href='/blog'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-normal items-center justify-start hover:text-purple-900 md:hover:text-xl text-2xl hover:text-3xl'>
                  Blog
                </a>
              </Link>

              <Link href='/contact'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-normal items-center justify-start hover:text-purple-900 md:hover:text-xl text-2xl hover:text-3xl'>
                  Contact
                </a>
              </Link>


              <Link href='/volunteer'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-normal items-center justify-start  hover:text-purple-900 md:hover:text-xl text-2xl hover:text-3xl'>
                  Volunteer
                </a>
              </Link>
            </div>
            {active ? null :
              <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center items-start flex flex-col w-full gap-4'>
                <button className='bg-transparent py-3 px-4 border border-primary hover:border-transparent w-44'>
                  <span className="text-primary text-xl">  Support Us </span>
                </button>
                <button className='bg-primary py-3 px-4 border border-primary hover:border-transparent w-44'>
                  <span className="text-white text-xl"> Join Us Today </span>
                </button>
              </div>
            }
          </div>
        </nav>
      </div>


    </div>
  )
}

export default NavBar;