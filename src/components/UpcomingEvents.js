import React, { useEffect, useState } from "react";
import AOS from "aos";
import UpcomingEventsCard from "./UpcomingEventsCard";

const UpcomingEvents = () => {
  const [fetchedEvents, setFetchedEvents] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const URL = process.env.NEXT_PUBLIC_BASE_URL  + "/api/v1/indexapi/events/";
  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setFetchedEvents(data);
        setIsFetching(false);
      } catch (error) {
        return error
      }
    }
    if (isFetching) {
      fetchEvents();
    }
  }, [isFetching]);

  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <section className="" id="upcoming">
      <div className="container xl:max-w-screen-xl mx-auto px-4 lg:py-24 py-20">
        <h2 className=" mb-10 md:text-4xl text-3xl font-bold max-w-max">
          Upcoming events
        </h2>
        <div className="">
          <UpcomingEventsCard events={fetchedEvents} />
        </div>
      </div>
    </section>
  );
};
export default UpcomingEvents;
