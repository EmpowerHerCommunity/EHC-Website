import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import { BsCalendarFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

const UpcomingEventsCard = ({ events }) => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <div className="shadow h-full" data-aos="zoom-out">
      <div className={" flex flex-col justify-between items-start gap-0"}>
         <div className="w-full py-3 px-5">
          {events.results && events.results.map((event) => (
            <div className="" key={event.id}>
              <div className="w-full">
                <img
                  src={event.image}
                  alt={event.name}
                />
              </div>
              <h2 className="md:text-2xl text-xl font-bold pt-4">{event.name}</h2>
              <p className="text-2xl lg:text-xl text-black text-opacity-60 leading-tight my-4">
                {event.description}
              </p>
              <div className="flex items-center gap-2 my-3 text-xl">
                <BsCalendarFill className="text-primary" />
                <span className="">{event.date || "To Be Announced"}</span>
              </div>
              <div className="flex my-4">
                <button className="bg-primary bg-opacity-80 py-3 px-4 border rounded-sm border-primary hover:border-transparent w-44">
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdiqxcF-QKi9bf97M6XaNUEmr1dc-5wOLpeAJqNWaCtRjTb5A/viewform">
                    <a target="_blank">
                      <span className="text-white text-2xl"> Read More </span>
                    </a>
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </div>
  );
};
export default UpcomingEventsCard;
