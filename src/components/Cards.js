import React, { useEffect } from 'react';
import AOS from 'aos';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const Cards = () => {
	useEffect(() => {
		AOS.init({ duration: 2500 });
		AOS.refresh();
	}, []);

	return (
		<section className="">
			<div className="container xl:max-w-screen-xl mx-auto px-4 pb-20">
				<div className='relative'>
					<img src="/contact-dots.svg" alt="" className="absolute top-[-5px] left-[5px] sm:left-[5px] ml-4" />
					<div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 max-w-5xl mx-auto pt-10">
						<div className='flex overflow-hidden' data-aos='fade-up'>
							<div className='relative w-full shadow-2x1 overflow-hidden rounded-sm'>
								<div className="h-96 w-full">
									<img src="volunteers/1.png" alt="" className='mix-blend-overlay relative inset-0 w-full h-full object-cover' />
								</div>
								<div className='flex justify-start bg-black bg-opacity-70 text-white text-left absolute top-0 right-0 bottom-0 left-0 p-5'>
									<div className='flex flex-col gap-4 justify-end lg:max-w-[280px] max-w-[400px]'>
										<h1 className=' text-4xl font-medium'>Programs <br></br> Manager</h1>
										<p className='lg:text-lg text-2xl w-12/12 mb-2'>
											Do you have any good managerial skills? Are you experienced in program management?
										</p>
										<Link href='https://forms.gle/jB8o8yZfYhxasNPj8' legacyBehavior>
											<a target='_blank' className="inline-block bg-[#5C80BC] text-white lg:text-xl text-2xl  text-center leading-[1] w-44 p-4 hover:scale-105 rounded-sm">
												Apply Here
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='flex overflow-hidden' data-aos='fade-up'>
							<div className='relative w-full shadow-2x1 overflow-hidden rounded-sm'>
								<div className="h-96 w-full">
									<img src="volunteers/2.png" alt="" className='mix-blend-overlay relative inset-0 w-full h-full object-cover' />
								</div>
								<div className='flex justify-start bg-black bg-opacity-70 text-white text-left absolute top-0 right-0 bottom-0 left-0 p-5'>
									<div className='flex flex-col gap-4 justify-end lg:max-w-[280px] max-w-[400px]'>
										<h1 className=' text-4xl font-medium'>
											Community <br></br> Manager
										</h1>
										<p className='lg:text-lg text-2xl w-12/12 mb-2'>
											Do you have good people skills? Are you experienced in community management?
										</p>
										<Link href='https://bit.ly/ehc_comm_manager' legacyBehavior>
											<a target='_blank' className="inline-block bg-[#E5A4CB] text-white lg:text-xl text-2xl  text-center leading-[1] w-44 p-4 hover:scale-105 rounded-sm">
												Apply Here
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='flex overflow-hidden' data-aos='fade-up'>
							<div className='relative w-full shadow-2x1 overflow-hidden rounded-sm'>
								<div className="h-96 w-full">
									<img src="volunteers/3.png" alt="" className='mix-blend-overlay relative inset-0 w-full h-full object-cover' />
								</div>
								<div className='flex justify-start bg-black bg-opacity-70 text-white text-left absolute top-0 right-0 bottom-0 left-0 p-5'>
									<div className='flex flex-col gap-4 justify-end lg:max-w-[280px] max-w-[400px]'>
										<h1 className=' text-4xl font-medium'>
											Web <br></br> Developer
										</h1>
										<p className='lg:text-lg text-2xl w-12/12 mb-2'>
											Do you have a love for technology? Are you experienced in web development?
										</p>
										<Link href='https://forms.gle/1MveyWBQbKQKbaV36' legacyBehavior>
											<a target='_blank' className="inline-block bg-[#947BD3] text-white lg:text-xl text-2xl  text-center leading-[1] w-44 p-4 hover:scale-105 rounded-sm">
												Apply Here
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='flex overflow-hidden' data-aos='fade-up'>
							<div className='relative w-full shadow-2x1 overflow-hidden rounded-sm'>
								<div className="h-96 w-full">
									<img src="volunteers/4.png" alt="" className='mix-blend-overlay relative inset-0 w-full h-full object-cover' />
								</div>
								<div className='flex justify-start bg-black bg-opacity-70 text-white text-left absolute top-0 right-0 bottom-0 left-0 p-5'>
									<div className='flex flex-col gap-4 justify-end lg:max-w-[280px] max-w-[400px]'>
										<h1 className=' text-4xl font-medium'>
											Content <br></br> Writing
										</h1>
										<p className='lg:text-lg text-2xl w-12/12 mb-2'>
											Do you have good content and writing skills? Are you experienced in content writing?
										</p>
										<Link href='https://forms.gle/QkiWM536MKUHKweq5' legacyBehavior>
											<a target='_blank' className="inline-block bg-[#5C80BC] text-white lg:text-xl text-2xl  text-center leading-[1] w-44 p-4 hover:scale-105 rounded-sm">
												Apply Here
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='flex overflow-hidden' data-aos='fade-up'>
							<div className='relative w-full shadow-2x1 overflow-hidden rounded-sm'>
								<div className="h-96 w-full">
									<img src="volunteers/5.png" alt="" className='mix-blend-overlay relative inset-0 w-full h-full object-cover' />
								</div>
								<div className='flex justify-start bg-black bg-opacity-70 text-white text-left absolute top-0 right-0 bottom-0 left-0 p-5'>
									<div className='flex flex-col gap-4 justify-end lg:max-w-[280px] max-w-[400px]'>
										<h1 className=' text-4xl font-medium'>
											Social Media <br></br> Manager
										</h1>
										<p className='lg:text-lg text-2xl w-12/12 mb-2'>
											Do you have good content and editing skills? Are you experienced in social media management?
										</p>
										<Link href='https://bit.ly/ehcsocialmediamanager' legacyBehavior>
											<a target='_blank' className="inline-block bg-[#E5A4CB] text-white lg:text-xl text-2xl  text-center leading-[1] w-44 p-4 hover:scale-105 rounded-sm">
												Apply Here
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='flex overflow-hidden' data-aos='fade-up'>
							<div className='relative w-full shadow-2x1 overflow-hidden rounded-sm'>
								<div className="h-96 w-full">
									<img src="volunteers/6.png" alt="" className='mix-blend-overlay relative inset-0 w-full h-full object-cover' />
								</div>
								<div className='flex justify-start bg-black bg-opacity-70 text-white text-left absolute top-0 right-0 bottom-0 left-0 p-5'>
									<div className='flex flex-col gap-4 justify-end lg:max-w-[280px] max-w-[400px]'>
										<h1 className=' text-4xl font-medium'>
											Designer
										</h1>
										<p className='lg:text-lg text-2xl w-12/12 mb-2'>
											Do you have good design skills? Are you experienced in Design?
										</p>
										<Link href='https://bit.ly/ehcdesigners' legacyBehavior>
											<a target='_blank' className="inline-block bg-[#947BD3] text-white lg:text-xl text-2xl text-center leading-[1] w-44 p-4 hover:scale-105 rounded-sm">
												Apply Here
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</section>
	)
}

export default Cards