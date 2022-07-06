import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import EventsGallery from './EventsGallery';


const PastEventsCard = ({ event, i }) => {

    console.log(event)
    console.log(i)

    useEffect(() => {
        AOS.init({ duration: 2500 });
        AOS.refresh();
    }, []);

    return (
        <div className={(i % 2 === 0) ? "" : "bg-primary bg-opacity-10"}>
            <div className="container mx-auto px-4">
                <div className={((i % 2 === 0) ? "flex-row-reverse" : "") + ' flex justify-between items-start gap-14 lg:py-32 sm:py-12 py-7'} >
                    <div data-aos='fade-left' className='md:flex-auto w-full md:w-7/12'>
                        <div>
                            <div className="relative mb-14 pt-4 max-w-max">
                                <h2 className='md:text-5xl text-4xl font-bold max-w-max'>
                                    {event.title}
                                </h2>
                                <hr className="border-0 h-1 w-3/5 absolute bottom-0 left-0 bg-yellow" />
                            </div>
                            <div className="">
                                {
                                    event.description.map(desc => {
                                        return (
                                            <p className='md:text-xl text-2xl md:my-8 my-4'>
                                                {/* We are a female community seeing to the growth and progress of all women in tech worldwide */}
                                                {desc}
                                            </p>

                                        )
                                    })
                                }
                            </div>
                            <div>
                                <div className="flex gap-4">
                                    <button className='bg-primary py-3 px-4 border border-primary hover:border-transparent w-44'>
                                        <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdiqxcF-QKi9bf97M6XaNUEmr1dc-5wOLpeAJqNWaCtRjTb5A/viewform'>
                                            <a target='_blank'>
                                                <span className="text-white text-lg"> Join Us Today </span>
                                            </a>
                                        </Link>
                                    </button>
                                </div>
                                <div className='mt-14'>
                                    <Image src='/group2.png' width='137px' height='137px' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex-auto w-full md:w-5/12' data-aos='fade-right'>
                    <div className='overflow-hidden rounded-bl-[55px] rounded-tr-[55px] flex w-full max-w-max' data-aos='fade-right'>
                        {/* <Image src='/herogirl.png' width='548px' height='539px' alt='' /> */}
                        <Image src={event.image} width='732px' height='744px' alt={event.title} />
                    </div>
                    <EventsGallery images={event.gallery} galleryI={i} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PastEventsCard;
