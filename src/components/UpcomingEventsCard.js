import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import { SiInstagram, SiTwitter, SiFacebook, SiLinkedin } from 'react-icons/si';
import { BsTelephone, BsPinMap, BsPin, BsCalendarFill } from 'react-icons/bs';
import { MdOutlineEmail, MdLocationPin, MdCalendarToday, MdCalendarViewMonth } from 'react-icons/md';


const UpcomingEventsCard = ({ event, i }) => {

    console.log(event)
    console.log(i)

    useEffect(() => {
        AOS.init({ duration: 2500 });
        AOS.refresh();
    }, []);

    return (
        <div className="shadow h-full" data-aos='zoom-out'>
            <div className={' flex flex-col justify-between items-start gap-0'} >
                <div className='w-full'>
                    <Image src={event.image} width='740px' height='440px' alt={event.title} />
                </div>
                <div className='w-full py-3 px-5'>
                    <div>
                        <h2 className='md:text-lg text-lg font-bold'>
                            {event.title}
                        </h2>
                            <p className='text-base text-black text-opacity-60 leading-tight my-4'>
                                {event.description}
                            </p>
                        <div className="flex items-center gap-2 my-3">
                            <MdLocationPin className='text-primary' />
                            <span className="">
                                {event.location}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 my-3">
                            <BsCalendarFill className='text-primary' />
                            <span className="">
                                {event.date || "To Be Announced"}
                            </span>
                        </div>
                        <div className="flex my-4">
                            <button className='bg-primary bg-opacity-80 py-3 px-4 border border-primary hover:border-transparent w-44'>
                                <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdiqxcF-QKi9bf97M6XaNUEmr1dc-5wOLpeAJqNWaCtRjTb5A/viewform'>
                                    <a target='_blank'>
                                        <span className="text-white text-lg"> Get Tickets </span>
                                    </a>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpcomingEventsCard;
