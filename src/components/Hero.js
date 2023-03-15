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
		<>
			<section className="">
				<div className="container mx-auto flex lg:px-24 px-5 py-24 items-center md:flex-row flex-col">
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0" data-aos='fade-up'>
		                <Image src='/hero-volunteer.png' className='object-cover object-center rounded' width='320px' height='280px' alt='volunteer hero' />
					</div>

					<div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left text-left" data-aos='fade-left'>
						<h1 className="sm:text-4xl text-3xl mb-4 font-semibold">You can volunteer to work with us</h1>
						<p className="mb-3 font-medium">All it takes is:</p>
						<ul className="list-disc ml-3">
							<li className="mt-1">Being motivated.</li>
							<li className="mt-2">Having an interest for women in tech.</li>
							<li className="mt-2">Having good organizational and managerial skills.</li>
							<li className="mt-2">Having experience in a related field.</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	)
}

export default Hero