import React, { useEffect } from 'react';
import AOS from 'aos';


const HeroEvents = () => {

    useEffect(() => {
        AOS.init({ duration: 2500 });
        AOS.refresh();
    }, []);

    return (
        <section className="bg-primary bg-opacity-10">
            <div className="container mx-auto px-4">
                <div className='grid md:grid-cols-2 py-4 md:py-16 md:px-24'>
                    <div className=' hero-about-list text-dark font-normal md:text-lg text-3xl  leading-7' data-aos='fade-right'>
                        <img src='/contact-dots.svg' alt='' />
                        <ul className='ml-8 mt-8'>
<li className='font-semibold my-1'> Events. </li>
<li className='font-semibold my-1'> Bootcamps. </li>
<li className='font-semibold my-1'>  Webinars. </li>
<li className='font-semibold my-1'>  Outreach. </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='md:text-5xl text-4xl font-bold text-center my-10 w-fit  relative'>Events <span><img src='/line2.png' alt='' /></span></h2>
                        <p className='font-normal md:text-xl text-2xl mb-4 md:leading-6' data-aos='fade-left'>
                            Since we began, we’ve had interactive sessions, media outreach,
                            bootcamps, we’ve hosted ladies all over the world.
                        </p>
                        <p className='font-normal md:text-xl text-2xl mb-4 md:leading-6' data-aos='fade-left'>
                            The <span className='text-primary opacity-60'>Empower Her Community</span>
                            Bootcamp 1.0 was a free bootcamp that ran for the course of 1 month.
                            The facilitators were all volunteers who gave of their time to see that these women were trained efficiently.
                        </p>
                        <p className='font-normal md:text-xl text-2xl mb-4 md:leading-6' data-aos='fade-left'>

                            The bootcamp featured Digital Marketing, Web development,
                            Graphics Design, Data Science, 3D Design, Modeling and Printing.
                            There has been so many  bootcamps since, all have been towards the empowerment of women in tech.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="h-[300px] md:h-[450px] w-full bg-no-repeat bg-cover bg-top bg-[url('/events2.jpg')]" data-aos='zoom-in'> */}
                {/* <div className="h-4/5 w-full" data-aos='zoom-in'>  */}
                {/* <img src='/events2.jpg' alt='' className='w-full h-4/5' /> */}
            {/* </div> */}
        </section>
    )
}
export default HeroEvents;


