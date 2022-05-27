import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css'


const NavBar = () => {

  const [active, setActive ] = useState(false);

  const handleClick = () => {
    setActive(!active);
  }
  return (
    <div className='w-full'>
      <nav className='lg:flex  items-center flex-wrap p-3 '>
        <div className='flex '> 
            <Link href='/'>
              <a className='inline-flex items-center p-2 mr-4'>
                <Image src='/logo.png' width='91px' height='90px' />
              </a>
            </Link>
        <button className= ' p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
        onClick={handleClick}>
            <svg
            className='w-6 h-6'
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

      <div className={` ${ active ? '' : 'hidden'} w-full lg:inline-flex lg:w-auto`}>
        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center items-start  flex flex-col lg:h-auto w-full'>         
      
          
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-start hover:bg-green-600 hover:text-white '>
                Home
              </a>
            </Link>
          
          
            <Link href='/aboutUs'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-start hover:bg-green-600 hover:text-white '>
                About
              </a>
            </Link>
          
          
            <Link href='/events'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-start hover:bg-green-600 hover:text-white '>
                Events
              </a>
            </Link>
          
          
            <Link href='/contact'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-start hover:bg-green-600 hover:text-white '>
                Contact
              </a>
            </Link>
          
          
            <Link href='/volunteer'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-start hover:bg-green-600 hover:text-white mr-52'>
                Volunteer
              </a>
            </Link>
          
        
        <div className={styles.btn1}> 
        <button className='bg-transparent py-2 px-4 border border-2 border-purple-400 hover:border-transparent rounded w-40 mr-10'>
         <span className={styles.span1}>  Support Us </span>
        </button>
        </div>

        <div className={styles.btn2}> 
        <button className='bg-transparent  py-2 px-4  hover:border-transparent rounded w-40'>
        <span className={styles.span2}> Join Us Today </span>
        </button>
        </div>

      </div>
    </div>
  </nav>
      
      
    </div>
  )
}

export default NavBar