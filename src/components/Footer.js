import React, { useEffect } from 'react';
import Link from 'next/link';
import { SiInstagram, SiTwitter, SiFacebook, SiLinkedin } from 'react-icons/si';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import Image from 'next/image';
import AOS from 'aos';



const Footer = () => {

  useEffect(() => {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, []);

  return (
    <footer className="footer">
      <div className="container mx-auto px-4 py-12 text-white">
    {/* <div className='footer md:grid grid-cols-2 gap-x-24 p-12 pb-16 text-white'> */}
        <h2 className='leading-10 md:text-5xl text-4xl font-normal mb-6'>Empower Her Community</h2>
    <div className='flex flex-wrap lg:flex-nowrap justify-between gap-10 w-full'>
      <div className='flex flex-col max-w-lg w-full' data-aos='zoom-in-up'>
        <p className='font-normal md:text-xl text-2xl leading-8 mb-8'>
        A Technology-based community focused on training 
and promoting women in the field of information 
technology, so as to help them advance in their career.
        </p>
        <div className='flex gap-6 mb-4'>
          <span className='border-2 border-solid rounded-full p-2'>
            <SiInstagram size='1.6rem'/>
          </span> 
          <span className='border-2 border-solid rounded-full p-2'>
            <SiTwitter size='1.6rem'/>
          </span> 
          <span className='border-2 border-solid rounded-full p-2'>
            <SiFacebook size='1.6rem'/>
          </span> 
          <span className='border-2 border-solid rounded-full p-2'>
            <SiLinkedin size='1.6rem' />
          </span>
        </div>
        <h4>Copyright &copy; {new Date().getFullYear()} EmpowerHer Community</h4>
      </div>
      <div className='flex flex-wrap sm:flex-nowrap gap-8 w-full lg:w-auto' data-aos='zoom-in-down'>
        <ul className="min-w-max">
          <li className="mb-4">
          <Link href='/'>
            <a>  
              Home
            </a>
          </Link>
            </li>
          <li className="mb-4">
          <Link href='/aboutUs'>
            <a>   
              About Us
            </a>
          </Link>
            </li>
          <li className="mb-4">
          <Link href='/events'>
            <a>  
              Events
            </a>
          </Link>
            </li>
          <li className="mb-4">
          <Link href='https://paystack.com/pay/empowerhercommunity'>
          <a target='_blank'>  
            Support Us
          </a>
          </Link>
            </li>
          </ul>
        <ul className="min-w-max">
          <li className="mb-4">
          <Link href='/volunteer'>
            <a>  
              Volunteer
            </a>
          </Link>
            </li>
          <li className="mb-4">
          <Link href='/aboutUs#team'>
            <a>  
              Meet The Team
            </a>
          </Link>
            </li>
          <li className="mb-4">
          <Link href='/contact'>
            <a>  
              Contact
            </a>
          </Link>
            </li>
          <li className="mb-4">
          <Link href='/'>
            <a>  
            Partners
            </a>
          </Link>
            </li>
          </ul>
        <ul className="w-full">
          <li className="mb-4">
          Contact Information
            </li>
          <li className="mb-4">
        <Link href='tel:+2349050475524'>
          <a className='flex items-center gap-4'> 
           <BsTelephone />
          +234 9050475524
          </a>
        </Link>
            </li>
          <li className="mb-4">
          <Link href='mailto:info@empowerher.community'>
            <a className='flex items-center gap-4'>   
          <MdOutlineEmail />
        info@empowerher
        .community
          </a>
        </Link>
            </li>
          <li className="mt-8 text-right">
                  <Image src='/footer-dots.png' width='110px' height='110px' alt='' />
            </li>
          </ul>
        {/* <div>
          <Link href='/'>
            <a>  
              Home
            </a>
          </Link>
        </div>
        <div>
          <Link href='/volunteer'>
            <a>  
              Volunteer
            </a>
          </Link>
        </div>
        <div>
          <Link href='/contact'>
            <a>  
              Contact
            </a>
          </Link>
        </div>
        <div>
          <Link href='/aboutUs'>
            <a>   
              About Us
            </a>
          </Link>
        </div>
        <div>
          <Link href='/aboutUs#team'>
            <a>  
              Meet The Team
            </a>
          </Link>
        </div>
        <div className='md:flex'>
        <Link href='tel:+2349050475524'>
          <a> 
           <BsTelephone />
          +234 9050475524
          </a>
        </Link>
        </div>
        <div>
          <Link href='/events'>
            <a>  
              Events
            </a>
          </Link>
        </div>
        <div className=''>
          <Link href='mailto:info@empowerher.community'>
            <a>   
          <MdOutlineEmail />
        info@empowerher
        .community
          </a>
        </Link>
        </div>
        <div>
          <Link href='https://paystack.com/pay/empowerhercommunity'>
          <a target='_blank'>  
            Support Us
          </a>
          </Link>
        </div>
        <div>
          <Link href='/'>
            <a>  
            Partners
            </a>
          </Link>
        </div> */}
      </div>
    </div>
        </div>
    </footer>
  )
}

export default Footer;