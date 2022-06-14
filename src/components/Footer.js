import React, { useEffect } from 'react';
import Link from 'next/link';
import { SiInstagram, SiTwitter, SiFacebook, SiLinkedin } from 'react-icons/si';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import AOS from 'aos';



const Footer = () => {

  useEffect(() => {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, []);

  return (
    <div className='footer md:grid grid-cols-2 gap-x-24 p-12 pb-16 text-white'>
      <div className='flex flex-col' data-aos='zoom-in-up'>
        <h2 className='leading-10 md:text-5xl text-4xl font-normal mb-4'>Empower Her Community</h2>
        <p className='font-normal md:text-xl text-2xl leading-8 mb-8'>
        A Technology-based community focused on training 
and promoting women in the field of information 
technology, so as to help them advance in their career.
        </p>
        <div className='flex justify-around mb-4'>
          <span className='border-2 border-solid rounded-full p-2'>
            <SiInstagram size='2rem'/>
          </span> 
          <span className='border-2 border-solid rounded-full p-2'>
            <SiTwitter size='2rem'/>
          </span> 
          <span className='border-2 border-solid rounded-full p-2'>
            <SiFacebook size='2rem'/>
          </span> 
          <span className='border-2 border-solid rounded-full p-2'>
            <SiLinkedin size='2rem' />
          </span>
        </div>
        <h4>Copyright &copy; {new Date().getFullYear()} EmpowerHer Community</h4>
      </div>
      <div className='grid grid-cols-3 gap-4 mt-12' data-aos='zoom-in-down'>
        <div>
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
        </div>
      </div>
    </div>
  )
}

export default Footer;