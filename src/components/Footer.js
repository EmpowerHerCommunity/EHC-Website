import React, { useEffect } from 'react';
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
        <div>Home</div>
        <div>Volunteer</div>
        <div>Contact</div>
        <div>About Us</div>
        <div>Meet The Team</div>
        <div className='md:flex'> <BsTelephone />
          +234 9050475524</div>
        <div>Events</div>
        <div>Contact</div>
        <div className=''><MdOutlineEmail />
        info@empowerher
        .community</div>
        <div>Support Us</div>
        <div>Partners</div>
      </div>
    </div>
  )
}

export default Footer;