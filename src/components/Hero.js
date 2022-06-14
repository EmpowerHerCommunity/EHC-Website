import React,{ useEffect } from 'react';
import AOS from 'aos';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2500});
    AOS.refresh();
  }, []);

  return (
    <div className={styles.hero}>
		<div className='flex justify-around lg:px-32 lg:py-32 sm:px-12 sm:py-12 p-7'>
			<div className='hidden sm:block bg-slate-100 rounded-r-lg h-2/4' data-aos='fade-up'>
          		<Image src='/cup.png' className='object-cover' width='300px' height='339px' alt ='' />
        	</div>

			<div data-aos='fade-left'>
				<article>
					<div className='hero-h2 md:text-6xl  text-5xl font-bold'>
						Call For Volunteers
					</div> 
					<div className=' md:text-xl text-2xl md:mt-8 mt-4 w-96 md:h-10 h-14 font-medium'>
              			Volunteer Requirements:
            		</div>
					<ul className='list-disc'>
						<li>An individual who is a team player.</li>
						<li>An individual who is motivated and interested in tech.</li>
						<li>An individual with good organizational and managerial skills.</li>
						<li>An individual with experience in related field.</li>
					</ul>

				</article>
        	</div>
		</div>
    </div>
  )
}

export default Hero