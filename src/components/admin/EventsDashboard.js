import { useState, useEffect } from "react";

const EventDashboard = () => {
    const [fetchedEvents, setFetchedEvents] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(true);

    const URL = "https://empowerher.pythonanywhere.com/api/v1/indexapi/events/";
   
    useEffect(() => {
      async function fetchEvents() {
        try {
          const response = await fetch(URL);
          const data = await response.json();
          setFetchedEvents(data.results);
          setIsFetching(false);
        } catch (error) {
          console.log("Failed to fetch events data: ", error);
        }
      }
      if (isFetching) {
        fetchEvents();
      }
    }, [isFetching]);

  return (
    <>
      <div className="rounded-lg">
        <table className="w-full mt-8">
          <thead className="text-left text-lg overflow-scroll w-screen">
            <tr className="text-lg font-semibold">
              <th
                data-column="name"
                className="font-semibold"
              >
                Events
              </th>
              <th className="font-semibold" data-column="email">
                Description
              </th>
              <th className="font-semibold" data-column="date">
                Date
              </th>
              <th className="font-semibold" data-column="date">
                options 
              </th>
              
            </tr>
          </thead>
          <tbody className="cursor-pointer">
            {fetchedEvents && fetchedEvents.map((data) => (
              <tr
                key={data.id}
                className=" h-16 w-full overflow-scroll mb-4 text-base bg-white rounded-l-lg py-2 hover:shadow-2xl hover:scale-100"
              >
                <td className="">{data.name}</td>
                <td className="w-6/12">{data.description}</td>
                <td className="">{data.date}</td>
                <td className=""><button>Add</button></td>
                <td><button className="w-14 rounded-md border bg-primary text-white h-10">Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};



export default EventDashboard;
