import React, { useEffect } from 'react';
import AOS from 'aos';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';

const Hero = () => {
	useEffect(() => {
		AOS.init({ duration: 2500 });
		AOS.refresh();
	}, []);

	return (
		<section className="">
			<div className="container xl:max-w-screen-xl mx-auto px-4 pt-20 pb-14">
				<div className={styles.hero}>
					<div className='flex justify-around gap-24'>
						<div className='hidden md:block h-2/4 lg:w-2/5 lg:flex-auto' data-aos='fade-up'>
                        {/* <div className="relative p-4"> */}
                            {/* <div className="flex absolute top-0 left-0">
                                <Image src='/border-tl.png' width='106px' height='106px' alt='' />
                            </div>
                            <div className="flex absolute top-0 right-0">
                                <Image src='/border-tr.png' width='106px' height='106px' alt='' />
                            </div>
                            <div className="flex absolute bottom-0 left-0">
                                <Image src='/border-bl.png' width='106px' height='106px' alt='' />
                            </div>
                            <div className="flex absolute bottom-0 right-0">
                                <Image src='/border-br.png' width='106px' height='106px' alt='' />
                            </div>
                            <div className='relative overflow-hidden rounded-bl-[4rem] rounded-tr-[3rem] flex w-full max-w-max' data-aos='fade-right'> */}
                                {/* <Image src='/herogirl.png' width='548px' height='539px' alt='' /> */}
								{/* <Image src='/volunteers.JPEG' className='object-cover' width='384px' height='384px' alt='' /> */}
                            {/* </div> */}
                        {/* </div> */}
							<div className='w-fit mx-auto' data-aos='fade-up'>
								{/* <div className='bg-slate-100 rounded-r-lg h-2/4' data-aos='fade-up'> */}
								<Image src='/volunteers.JPEG' className='object-cover' width='384px' height='384px' alt='' />
							</div>
						</div>

						<div className='lg:w-3/5 lg:flex-auto' data-aos='fade-left'>
							{/* <div data-aos='fade-left'> */}
							<article>
								<div className='hero-h2 md:text-6xl  text-5xl font-bold'>
									Call For Volunteers
								</div>
								<div className=' md:text-xl text-2xl md:mt-8 mt-4 font-medium'>
									Volunteer Requirements:
								</div>
								<ul className='list-disc ml-6 text-lg'>
									<li>An individual who is a team player.</li>
									<li>An individual who is motivated and interested in tech.</li>
									<li>An individual with good organizational and managerial skills.</li>
									<li>An individual with experience in related field.</li>
								</ul>

							</article>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero