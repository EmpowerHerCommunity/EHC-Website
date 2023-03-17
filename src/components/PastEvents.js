import React, { useEffect } from 'react';
import AOS from 'aos';
import PastEventsCard from './PastEventsCard';


const PastEvents = () => {

    let events = [
        {
            title: 'Bootcamp 1.0',
            description: [
                'The Empower Her Community Bootcamp 1.0 was a free bootcamp that ran for the course of 1 month. The facilitators were all volunteers who gave of their time to see that these women were trained efficiently.',
                'The bootcamp was for women between the ages of 18-40 years. The bootcamp ran for a course of 1 month.The bootcamp featured Digital Marketing, Web development, Graphics Design, Data Science, 3D Design, Modeling and Printing,'
            ],
            image: '/events/event2.jpg',

            gallery: [
                '/events/event1.jpg',
                '/events/gallery2.jpg',
                '/events/gallery3.jpg',
                '/events/gallery4.jpg',
                '/events/event1.jpg',
                '/events/gallery2.jpg',
                '/events/gallery3.jpg',
                '/events/gallery4.jpg'
            ]
        },
        {
            title: 'Webinar',
            description: [
                `This was an interactive session conducted to address the Disinterest and Discouragement of girls in IT. The webinar's key note speaker was Miss Elizabeth Okaome.`,
                `She addressed the factors that led to disinterest towards IT in women, and also talked about solutions the community is putting in place to address these issues.`
            ],
            image: '/events/event1.jpg',
            gallery: [
                '/events/event1.jpg',
                '/events/gallery2.jpg',
                '/events/gallery3.jpg',
                '/events/gallery4.jpg',
                '/events/event1.jpg',
                '/events/gallery2.jpg',
                '/events/gallery3.jpg',
                '/events/gallery4.jpg'
            ]
        }
    ]

    useEffect(() => {
        AOS.init({ duration: 2500 });
        AOS.refresh();
    }, []);

    return (
        <section className="">
            {
                events.map((event, i) => {
                    return (
                        <PastEventsCard event={event} i={i} key={`pastevent${i}`} />
                    )
                })
            }
        </section>
    )
}
export default PastEvents;
