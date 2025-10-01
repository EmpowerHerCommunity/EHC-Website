import React, { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import { BsCalendarFill } from "react-icons/bs";

const UpcomingEventsCard = ({ events }) => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <div className="h-full flex" data-aos="zoom-out">
      <div className="">
        {events.count === 0 ? (
          <p className="text-2xl">There are no upcoming events presently</p>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 place-items-center gap-40 py-3 px-5">
            {events.results &&
              events.results.map((event) => (
                <div key={event.id} className="px-2 py-2 shadow-sm rounded-md">
                  <div className="w-full">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-80 h-80"
                    />
                  </div>
                  <h2 className="md:text-2xl text-xl font-bold pt-4">
                    {event.name}
                  </h2>
                  <p className="text-2xl lg:text-xl text-black text-opacity-60 leading-tight my-4 w-96">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 my-3 text-xl">
                    <BsCalendarFill className="text-primary" />
                    <span className="ml-2">
                      {event.date || "To Be Announced"}
                    </span>
                  </div>
                  <div className="flex my-4">
                    <button className="bg-primary bg-opacity-80 py-3 px-4 border rounded-sm border-primary hover:border-transparent w-44">
                      <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdiqxcF-QKi9bf97M6XaNUEmr1dc-5wOLpeAJqNWaCtRjTb5A/viewform">
                          <span className="text-white text-2xl">
                            Read More
                          </span>
                      </Link>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default UpcomingEventsCard;
