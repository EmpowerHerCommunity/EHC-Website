import React, { useEffect } from 'react';
import AOS from 'aos';
import UpcomingEventsCard from './UpcomingEventsCard';


const UpcomingEvents = () => {

    let events = [
        {
            title: 'I/O Extended: Web Edition Benin',
            description: 'Google I/O connects developers from around the world . This year I/O Extended is hosting a special edition dedicated to Web Technologies.',
            image: '/events/event3.jpg',
            location: 'Edo Innovation Hub - ICE Road Benin',
            date: null
        },
        {
            title: 'Non-Technical: Bootcamp 1.0',
            description: `A 2 months Bootcamp with the aim of getting more women into the non technical sphere of tech as most people believe you have to have a technical skill to be in tech.`,
            image: '/events/event4.jpg',
            location: 'Remote',
            date: null
        }
    ]

    useEffect(() => {
        AOS.init({ duration: 2500 });
        AOS.refresh();
    }, []);

    return (
        <section className="">
            <div className="container xl:max-w-screen-xl mx-auto px-4 py-14">
                <h2 className='md:text-3xl text-3xl font-bold max-w-max'>
                    Upcoming events
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
                    {
                        events.map((event, i) => {
                            return (
                                // <div className="">
                                    <UpcomingEventsCard event={event} i={i} key={`upcomingEvent${i}`} />
                                // </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default UpcomingEvents;
