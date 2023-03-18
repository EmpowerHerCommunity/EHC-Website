import React, { useEffect } from "react";
import AOS from "aos";
import PastEventsCard from "./PastEventsCard";

const PastEvents = () => {
  let events = [
    {
      title: "Bootcamp 1.0",
      description: [
        "The Empower Her Community Bootcamp 1.0 was a game-changing initiative that provided women aged 18-40 with a month-long, free-of-charge training program. Our dedicated facilitators, who were all volunteers, generously contributed their time and expertise to ensure that participants received the highest quality training in Digital Marketing, Web Development, Graphics Design, Data Science, 3D Design, Modeling, and Printing. The bootcamp was an incredible success, and we are proud to have empowered so many women to develop new skills and enhance their knowledge."
      ],
      image: "/events/event2.jpg",

      gallery: [
        "/events/event1.jpg",
        "/events/gallery2.jpg",
        "/events/gallery3.jpg",
        "/events/gallery4.jpg",
        "/events/event1.jpg",
        "/events/gallery2.jpg",
        "/events/gallery3.jpg",
        "/events/gallery4.jpg",
      ],
    },
    {
      title: "Webinar",
      description: [
        "We recently conducted an interactive session aimed at addressing the disinterest and discouragement that girls often experience in the field of IT. The session featured an esteemed keynote speaker, Miss Elizabeth Okaome, who expertly highlighted the factors that contribute to women's disinterest in IT and proposed solutions that the community is implementing to address these challenges. Through her insightful presentation and thought-provoking discussion, Miss Okaome inspired attendees to reconsider their perceptions of the IT industry and encouraged them to pursue their passions with confidence."
      ],
      image: "/events/event1.jpg",
      gallery: [
        "/events/event1.jpg",
        "/events/gallery2.jpg",
        "/events/gallery3.jpg",
        "/events/gallery4.jpg",
        "/events/event1.jpg",
        "/events/gallery2.jpg",
        "/events/gallery3.jpg",
        "/events/gallery4.jpg",
      ],
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <section className="">
      {events.map((event, i) => {
        return <PastEventsCard event={event} i={i} key={`pastevent${i}`} />;
      })}
    </section>
  );
};
export default PastEvents;
