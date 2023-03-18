import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import EventsGallery from './EventsGallery';


const PastEventsCard = ({ event, i }) => {

    useEffect(() => {
        AOS.init({ duration: 2500 });
        AOS.refresh();
    }, []);

    return (
        <div className={(i % 2 === 0) ? "" : "bg-primary bg-opacity-10"}>
            <div className="container relative xl:max-w-screen-xl mx-auto px-4 py-10">
                {
                    (i % 2 === 0) ?
                        <div className='absolute bottom-[40px] right-0'>
                            <Image src='/purple-dots-down.png' width='137px' height='137px' alt='' />
                        </div> :
                        <div className='absolute top-full left-0 transform -translate-y-1/2'>
                            <Image src='/group2.png' width='137px' height='137px' alt='' />
                        </div>
                }
                <div className={((i % 2 === 0) ? "lg:flex-row-reverse" : "lg:flex-row") + ' flex flex-col justify-between items-start gap-14'} >
                    <div data-aos='fade-left' className='lg:flex-auto w-full lg:w-6/12'>
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
                                            <p className='text-justify md:text-lg text-lg leading-7 md:my-8 my-4' key={'event-card-' + i}>
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
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex-auto w-full lg:w-5/12' data-aos='fade-right'>
                        <div className="relative p-4">
                            <div className="flex absolute top-0 left-0">
                                <Image src='/border-tl.png' width='106px' height='106px' alt='' />
                            </div>
                            <div className="flex absolute top-0 right-28">
                                <Image src='/border-tr.png' width='106px' height='106px' alt='' />
                            </div>
                            <div className="flex absolute bottom-0 left-0">
                                <Image src='/border-bl.png' width='106px' height='106px' alt='' />
                            </div>
                            <div className="flex absolute bottom-0 right-28">
                                <Image src='/border-br.png' width='106px' height='106px' alt='' />
                            </div>
                            <div className='relative overflow-hidden rounded-bl-[4rem] rounded-tr-[3rem] flex w-10/12 max-w-max' data-aos='fade-right'>
                                <Image src={event.image} width='400px' height='400px' alt={event.title} />
                            </div>
                        </div>
                        <EventsGallery images={event.gallery} galleryI={i} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PastEventsCard;
