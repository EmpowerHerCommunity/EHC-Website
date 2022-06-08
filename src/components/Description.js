import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import AOS from 'aos';

const Description = () => {

  useEffect(() => {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, []);

  return (
     <div className='m-12'>
       <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
         <div data-aos='fade-down'>
           <Image src='/events2.jpg' width='498px' height='350px' />
         </div>
         <div>
         <h2 className='hero-h2 font-normal md:text-5xl text-5xl mb-6 font-bold' data-aos='fade-right'>Who Are We?</h2>
         <p className='hero-paragraph font-normal md:text-xl text-3xl md:leading-6 leading-8 mb-4' data-aos='fade-up'> 
         The Empower Her Community is a tech-based community focused on training and promoting women in the field of information technology for free. We aim to spread awareness for opportunities in information technology and incorporate as many women as possible.
         </p>
         <div className='leading-6 mt-2 mb-12'> 
            <button className='bg-fuchsia-900  md:py-2 py-4 px-4  hover:border-transparent rounded md:w-40 w-56'>
              <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdiqxcF-QKi9bf97M6XaNUEmr1dc-5wOLpeAJqNWaCtRjTb5A/viewform'>
                <a target='_blank'>  
                  <span className={styles.span2}>
                    Join Us Today 
                  </span>
                </a>
              </Link>
              </button>
          </div>
              <div className='grid grid-cols-3 gap-8' data-aos='fade-up-right'>
      <div>
<Image src='/1.png' width='36px' height='36px' />
</div>
<div>
<Image src='/2.png' width='36px' height='36px' />
</div>
<div>
<Image src='/3.png' width='36px' height='36px' />
</div>
<div>
<Image src='/5.png' width='103px' height='61px' />
</div>
<div>
<Image src='/6.png' width='103px' height='61px' />
</div>
<div>
<Image src='/4.png' width='103px' height='61px' />
</div>
</div>
         </div>

       </div>
     </div>
  )
}

export default Description;




