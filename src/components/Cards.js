import React, { useEffect } from 'react';
import AOS from 'aos';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
// import Image from 'next/image';

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
						{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-lg mx-auto"> */}
						<div className='flex overflow-hidden' data-aos='fade-up'>
							<div className='relative w-full shadow-2x1 overflow-hidden'>
								{/* <Image src='/volunteers/1.png' width='341px' height='400px' alt='Programs manager' /> */}
								<div className="h-96 w-full">
									<img src="volunteers/1.png" alt="" className='mix-blend-overlay relative inset-0 w-full h-full object-cover' />
								</div>
								<div className='flex justify-start bg-black bg-opacity-70 text-white text-left absolute top-0 right-0 bottom-0 left-0 p-5'>
									<div className='flex flex-col gap-4 justify-end max-w-[250px] '>
										<h1 className=' text-4xl font-medium'>Programs <br></br> Manager</h1>
										<p className='text-base'>
											Do you have any good managerial and organizational skils? Are you experienced in program management
										</p>
										<Link href='https://forms.gle/jB8o8yZfYhxasNPj8'>
											<a target='_blank' className="inline-block bg-[#FF7262] text-white text-base text-center leading-[1] w-44 p-4">
												Apply Here
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>



						<div className='flex overflow-hidden' data-aos='fade-up'>
							<div className='relative w-full shadow-2x1 overflow-hidden'>
								<div className="h-96 w-full">
									<img src="volunteers/2.png" alt="" className='mix-blend-overlay relative inset-0 w-full h-full object-cover' />
								</div>
								<div className='flex justify-start bg-black bg-opacity-70 text-white text-left absolute top-0 right-0 bottom-0 left-0 p-5'>
									<div className='flex flex-col gap-4 justify-end max-w-[250px] '>
										<h1 className=' text-4xl font-medium'>
											Community <br></br> Manager
										</h1>
										<p className='text-base'>
											Do you have any good managerial and organizational skils? Are you experienced in program management
										</p>
										<Link href='https://bit.ly/ehc_comm_manager'>
											<a target='_blank' className="inline-block bg-[#FF7262] text-white text-base text-center leading-[1] w-44 p-4">
												Apply Here
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						{/* <div className='flex flex-col m-6 overflow-hidden sm:w-64' data-aos='fade-up'>
							<div className={styles.overlay}>
								<div className='relative w-80 h-80 max-w-full rounded-lg shadow-2x1 overflow-hidden py-24'>
									<img src="volunteers/2.png" alt="" className='mix-blend-overlay absolute inset-0 w-full h-full object-cover' />
									<div className='text-white text-left absolute bottom-[25px] pl-5'>
										<h1 className=' text-4xl font-medium'></h1>
										<p className='text-sm py-2'>Do you have any good managerial and organizational skils? Are you experienced in program management</p>
										<Link href='https://bit.ly/ehc_comm_manager'>
											<a target='_blank'>
												<span className={[styles.volunteer, styles.volBtn2].join(" ")}>
													Apply Here
												</span>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div> */}



						<div className='flex overflow-hidden' data-aos='fade-up'>
							<div className='relative w-full shadow-2x1 overflow-hidden'>
								<div className="h-96 w-full">
									<img src="volunteers/3.png" alt="" className='mix-blend-overlay relative inset-0 w-full h-full object-cover' />
								</div>
								<div className='flex justify-start bg-black bg-opacity-70 text-white text-left absolute top-0 right-0 bottom-0 left-0 p-5'>
									<div className='flex flex-col gap-4 justify-end max-w-[250px] '>
										<h1 className=' text-4xl font-medium'>
											Web <br></br> Developer
										</h1>
										<p className='text-base'>
											Do you have any good managerial and organizational skils? Are you experienced in program management
										</p>
										<Link href='https://forms.gle/1MveyWBQbKQKbaV36'>
											<a target='_blank' className="inline-block bg-[#FF7262] text-white text-base text-center leading-[1] w-44 p-4">
												Apply Here
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						{/* <div className='flex flex-col m-6 overflow-hidden sm:w-64' data-aos='fade-up'>
							<div className={styles.overlay}>
								<div className='relative w-80 h-80 max-w-full rounded-lg shadow-2x1 overflow-hidden py-24'>
									<img src="volunteers/3.png" alt="" className='mix-blend-overlay absolute inset-0 w-full h-full object-cover' />
									<div className='text-white text-left absolute bottom-[25px] pl-5'>
										<h1 className=' text-4xl font-medium'></h1>
										<p className='text-sm py-2'>Do you have any good managerial and organizational skils? Are you experienced in program management</p>
										<Link href='https://forms.gle/1MveyWBQbKQKbaV36'>
											<a target='_blank'>
												<span className={[styles.volunteer, styles.volBtn3].join(" ")}>
													Apply Here
												</span>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div> */}



						<div className='flex overflow-hidden' data-aos='fade-up'>
							<div className='relative w-full shadow-2x1 overflow-hidden'>
								<div className="h-96 w-full">
									<img src="volunteers/4.png" alt="" className='mix-blend-overlay relative inset-0 w-full h-full object-cover' />
								</div>
								<div className='flex justify-start bg-black bg-opacity-70 text-white text-left absolute top-0 right-0 bottom-0 left-0 p-5'>
									<div className='flex flex-col gap-4 justify-end max-w-[250px] '>
										<h1 className=' text-4xl font-medium'>
											Content <br></br> Writing
										</h1>
										<p className='text-base'>
											Do you have any good managerial and organizational skils? Are you experienced in program management
										</p>
										<Link href='https://forms.gle/QkiWM536MKUHKweq5'>
											<a target='_blank' className="inline-block bg-[#FF7262] text-white text-base text-center leading-[1] w-44 p-4">
												Apply Here
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						{/* <div className='flex flex-col m-6 overflow-hidden sm:w-64' data-aos='fade-up'>
							<div className={styles.overlay}>
								<div className='relative w-80 h-80 max-w-full rounded-lg shadow-2x1 overflow-hidden py-24'>
									<img src="volunteers/4.png" alt="" className='mix-blend-overlay absolute inset-0 w-full h-full object-cover' />
									<div className='text-white text-left absolute bottom-[25px] pl-5'>
										<h1 className=' text-4xl font-medium'></h1>
										<p className='text-sm py-2'>Do you have any good managerial and organizational skils? Are you experienced in program management</p>
										<Link href='https://forms.gle/QkiWM536MKUHKweq5'>
											<a target='_blank'>
												<span className={[styles.volunteer, styles.volBtn4].join(" ")}>
													Apply Here
												</span>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div> */}



						<div className='flex overflow-hidden' data-aos='fade-up'>
							<div className='relative w-full shadow-2x1 overflow-hidden'>
								<div className="h-96 w-full">
									<img src="volunteers/5.png" alt="" className='mix-blend-overlay relative inset-0 w-full h-full object-cover' />
								</div>
								<div className='flex justify-start bg-black bg-opacity-70 text-white text-left absolute top-0 right-0 bottom-0 left-0 p-5'>
									<div className='flex flex-col gap-4 justify-end max-w-[250px] '>
										<h1 className=' text-4xl font-medium'>
											Social Media <br></br> Manager
										</h1>
										<p className='text-base'>
											Do you have any good managerial and organizational skils? Are you experienced in program management
										</p>
										<Link href='https://bit.ly/ehcsocialmediamanager'>
											<a target='_blank' className="inline-block bg-[#FF7262] text-white text-base text-center leading-[1] w-44 p-4">
												Apply Here
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						{/* <div className='flex flex-col m-6 overflow-hidden sm:w-64' data-aos='fade-up'>
							<div className={styles.overlay}>
								<div className='relative w-80 h-80 max-w-full rounded-lg shadow-2x1 overflow-hidden py-24'>
									<img src="volunteers/5.png" alt="" className='mix-blend-overlay absolute inset-0 w-full h-full object-cover' />
									<div className='text-white text-left absolute bottom-[25px] pl-5'>
										<h1 className=' text-4xl font-medium'></h1>
										<p className='text-sm py-2'>Do you have any good managerial and organizational skils? Are you experienced in program management</p>
										<Link href='https://bit.ly/ehcsocialmediamanager'>
											<a target='_blank'>
												<span className={[styles.volunteer, styles.volBtn5].join(" ")}>
													Apply Here
												</span>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div> */}



						<div className='flex overflow-hidden' data-aos='fade-up'>
							<div className='relative w-full shadow-2x1 overflow-hidden'>
								<div className="h-96 w-full">
									<img src="volunteers/6.png" alt="" className='mix-blend-overlay relative inset-0 w-full h-full object-cover' />
								</div>
								<div className='flex justify-start bg-black bg-opacity-70 text-white text-left absolute top-0 right-0 bottom-0 left-0 p-5'>
									<div className='flex flex-col gap-4 justify-end max-w-[250px] '>
										<h1 className=' text-4xl font-medium'>
											Designer
										</h1>
										<p className='text-base'>
											Do you have any good managerial and organizational skils? Are you experienced in program management
										</p>
										<Link href='https://bit.ly/ehcdesigners'>
											<a target='_blank' className="inline-block bg-[#FF7262] text-white text-base text-center leading-[1] w-44 p-4">
												Apply Here
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						{/* <div className='flex flex-col m-6 overflow-hidden sm:w-64' data-aos='fade-up'>
							<div className={styles.overlay}>
								<div className='relative w-80 h-80 max-w-full rounded-lg shadow-2x1 overflow-hidden py-24'>
									<img src="volunteers/6.png" alt="" className='mix-blend-overlay absolute inset-0 w-full h-full object-cover' />
									<div className='text-white text-left absolute bottom-[25px] pl-5'>
										<h1 className=' text-4xl font-medium'></h1>
										<p className='text-sm py-2'>Do you have any good managerial and organizational skils? Are you experienced in program management</p>
										<Link href='https://bit.ly/ehcdesigners'>
											<a target='_blank'>
												<span className={[styles.volunteer, styles.volBtn6].join(" ")}>
													Apply Here
												</span>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div> */}

					</div>
					{/* <div className='flex flex-wrap justify-center' data-aos='fade-up'>
						<div className='flex flex-col m-6 overflow-hidden sm:w-64'>
							<div className={styles.overlay}>
								<div className='relative w-80 h-80 max-w-full rounded-lg shadow-2x1 overflow-hidden py-24'>
									<img src="volunteers/1.png" alt="" className='mix-blend-overlay absolute inset-0 w-full h-full object-cover' />
									<div className='text-white text-left absolute bottom-[25px] pl-5'>
										<h1 className=' text-4xl font-medium'>Programs <br></br> Manager</h1>
										<p className='text-sm py-2'>Do you have any good managerial and organizational skils? Are you experienced in program management</p>
										<Link href='https://forms.gle/jB8o8yZfYhxasNPj8'>
											<a target='_blank'>
												<span className={[styles.volunteer, styles.volBtn1].join(" ")}>
													Apply Here
												</span>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='flex flex-col m-6 overflow-hidden sm:w-64'>
							<div className={styles.overlay}>
								<div className='relative w-80 h-80 max-w-full rounded-lg shadow-2x1 overflow-hidden py-24'>
									<img src="volunteers/2.png" alt="" className='mix-blend-overlay absolute inset-0 w-full h-full object-cover' />
									<div className='text-white text-left absolute bottom-[25px] pl-5'>
										<h1 className=' text-4xl font-medium'>Community <br></br> Manager</h1>
										<p className='text-sm py-2'>Do you have any good managerial and organizational skils? Are you experienced in program management</p>
										<Link href='https://bit.ly/ehc_comm_manager'>
											<a target='_blank'>
												<span className={[styles.volunteer, styles.volBtn2].join(" ")}>
													Apply Here
												</span>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='flex flex-col m-6 overflow-hidden sm:w-64'>
							<div className={styles.overlay}>
								<div className='relative w-80 h-80 max-w-full rounded-lg shadow-2x1 overflow-hidden py-24'>
									<img src="volunteers/3.png" alt="" className='mix-blend-overlay absolute inset-0 w-full h-full object-cover' />
									<div className='text-white text-left absolute bottom-[25px] pl-5'>
										<h1 className=' text-4xl font-medium'>Web <br></br> Developer</h1>
										<p className='text-sm py-2'>Do you have any good managerial and organizational skils? Are you experienced in program management</p>
										<Link href='https://forms.gle/1MveyWBQbKQKbaV36'>
											<a target='_blank'>
												<span className={[styles.volunteer, styles.volBtn3].join(" ")}>
													Apply Here
												</span>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>

					</div>
					<div className='flex flex-wrap justify-center' data-aos='fade-up'>
						<div className='flex flex-col m-6 overflow-hidden sm:w-64'>
							<div className={styles.overlay}>
								<div className='relative w-80 h-80 max-w-full rounded-lg shadow-2x1 overflow-hidden py-24'>
									<img src="volunteers/4.png" alt="" className='mix-blend-overlay absolute inset-0 w-full h-full object-cover' />
									<div className='text-white text-left absolute bottom-[25px] pl-5'>
										<h1 className=' text-4xl font-medium'>Content <br></br> Writing</h1>
										<p className='text-sm py-2'>Do you have any good managerial and organizational skils? Are you experienced in program management</p>
										<Link href='https://forms.gle/QkiWM536MKUHKweq5'>
											<a target='_blank'>
												<span className={[styles.volunteer, styles.volBtn4].join(" ")}>
													Apply Here
												</span>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='flex flex-col m-6 overflow-hidden sm:w-64'>
							<div className={styles.overlay}>
								<div className='relative w-80 h-80 max-w-full rounded-lg shadow-2x1 overflow-hidden py-24'>
									<img src="volunteers/5.png" alt="" className='mix-blend-overlay absolute inset-0 w-full h-full object-cover' />
									<div className='text-white text-left absolute bottom-[25px] pl-5'>
										<h1 className=' text-4xl font-medium'>Social Media <br></br> Manager</h1>
										<p className='text-sm py-2'>Do you have any good managerial and organizational skils? Are you experienced in program management</p>
										<Link href='https://bit.ly/ehcsocialmediamanager'>
											<a target='_blank'>
												<span className={[styles.volunteer, styles.volBtn5].join(" ")}>
													Apply Here
												</span>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='flex flex-col m-6 overflow-hidden sm:w-64'>
							<div className={styles.overlay}>
								<div className='relative w-80 h-80 max-w-full rounded-lg shadow-2x1 overflow-hidden py-24'>
									<img src="volunteers/6.png" alt="" className='mix-blend-overlay absolute inset-0 w-full h-full object-cover' />
									<div className='text-white text-left absolute bottom-[25px] pl-5'>
										<h1 className=' text-4xl font-medium'>Designer</h1>
										<p className='text-sm py-2'>Do you have any good managerial and organizational skils? Are you experienced in program management</p>
										<Link href='https://bit.ly/ehcdesigners'>
											<a target='_blank'>
												<span className={[styles.volunteer, styles.volBtn6].join(" ")}>
													Apply Here
												</span>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>

					</div> */}
				</div>

			</div>
		</section>
	)
}

export default Cards