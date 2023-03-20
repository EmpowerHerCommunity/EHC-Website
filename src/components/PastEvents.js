import React, { useEffect } from "react";
import AOS from "aos";
import PastEventsCard from "./PastEventsCard";

const PastEvents = () => {
  let events = [
    {
      title: "Bootcamp 1.0",
      description: [
        "Empower Her Community Bootcamp 1.0 was a game-changing initiative that provided women with a month-long, free-of-charge training program. Our dedicated facilitators, who were all volunteers, generously contributed their time and expertise to ensure that participants received the highest quality training in Digital Marketing, Web Development, Graphics Design, Data Science, 3D Design, Modeling, and Printing. The bootcamp was an incredible success, and we are proud to have empowered so many women to develop new skills and enhance their knowledge.",
      ],
      image: "/volunteers.JPEG",

      gallery: [
        "/volunteers.JPEG",
        "/groupPic.jpg",
        "/events/gallery3.jpg",
        "/groupPic4.jpg",
        "/volunteers.JPEG",
        "/events/gallery4.jpg",
        "/groupPic.jpg",
      ],
    },

    {
      title: "Bootcamp 2.0",
      description: [
        "Empower Her Community Bootcamp 2.0 was an even more comprehensive training program designed specifically for women. This two-month long initiative offered training in a range of skills, including Frontend and Backend Web Development, Product Management, Cybersecurity, Data Science, Digital Marketing, Product Design, and Blockchain. The program was completely free and provided participants with access to a team of experienced and dedicated facilitators who were committed to ensuring the success of each participant.",
      ],
      image: "/web.jpg",
      gallery: [
        "/nit15.jpg",
        "/nit14.jpg",
        "/nit13.jpg",
        "/nit11.jpg",
        "/nit15.jpg",
        "/nit14.jpg",
      ],
    },
    {
      title: "Non Technical Bootcamp",
      description: [
        "Empower Her Community Non Technical Bootcamp was a two-month-long program that focused on the non-technical aspects of the tech industry. The program offered training in Technical Writing, UX Writing, Product Marketing, Customer Success, Community Management, and Product Management. It was designed specifically to empower women and was completely free of charge. The program was a huge success, and we are proud to have helped so many women develop new skills and knowledge in the tech industry.",
      ],
      image: "/nontechb.jpg",
      gallery: [
        "/nit8.jpg",
        "/nit11.jpg",
        "/nit9.jpg",
        "/nit7.jpg",
        "/nit8.jpg",
        "/nit9.jpg",
      ],
    },
    {
      title: "Webinar",
      description: ["The interactive sessions were specifically designed to tackle the prevalent disinterest and discouragement experienced by girls in the IT field. With some amazing keynote speakers, the session expertly highlighted the factors that contribute to women's disinterest in IT and provided practical solutions that attendees could implement to overcome these challenges. The session was also packed with career advancement plans, CV and interview preparation, and other resources to equip attendees with the tools they need to excel in the field. Overall, the series was a highly insightful and thought-provoking experience, leaving attendees feeling inspired and empowered to pursue their passions with new found confidence."],
      image: "/webinar2.jpg",
      gallery: [
        "/webinar3.jpg",
        "/webinar2.jpg",
        "/webinar4.jpg",
        "/webinar3.jpg",
        "/webinar4.jpg",
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
