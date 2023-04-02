import { useState, useEffect } from "react";
import Delete from "../Delete/Delete";

const FeaturedDashboard = () => {
    const [fetchedEvents, setFetchedEvents] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(true);
    const [del, setDel] = useState(false);

  const handleDel = () => {
    setDel(!del);
  };

    const URL = "https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/?mode=featured";
   
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
    {del ? <Delete handleDel={handleDel}/> : 
      <div className="rounded-lg">
        <table className="w-full mt-8">
          <thead className="text-left text-lg overflow-scroll w-screen">
            <tr className="text-lg font-semibold">
              <th
                data-column="name"
                className="font-semibold"
              >
                Title
              </th>
              <th className="font-semibold" data-column="email">
                Description
              </th>
              <th className="font-semibold" data-column="date">
                Author
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
                className=" h-28 w-full overflow-scroll text-base bg-white rounded-l-lg py-10 hover:shadow-lg hover:bg-light hover:scale-100"
              >
                <td className="w-3/12">{data.title}</td>
                <td className="w-6/12">{data.introduction}</td>
                <td className="">{data.author}</td>
               <td><button onClick={handleDel} className="w-16 rounded-md border bg-primary text-white h-10">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      }
    </>
  );
};

export default FeaturedDashboard