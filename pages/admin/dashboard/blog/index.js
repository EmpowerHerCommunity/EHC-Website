import Link from "next/link";
import { useState, useEffect } from "react";
import SideBar from "../../../../src/components/admin/SideBar";

const BlogDashboard = () => {
  const [fetchedEvents, setFetchedEvents] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(true);
  const [edit, setEdit] = useState(false);

  const URL = "https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/";

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setFetchedEvents(data.results);
        setIsFetching(false);
      } catch (error) {
        setError("Failed to fetch events data");
      }
    }
    if (isFetching) {
      fetchEvents();
    }
  }, [isFetching]);

  return (
    <div className="flex ">
      <div className="w-2/12">
        <SideBar />
      </div>
      {error && <p className="text-lg">{error}</p>}
      <div className="rounded-lg w-10/12 pl-5 mt-11">
        <h1 className="text-4xl">Dashboard: Blogs</h1>
        <table className="w-full mt-16">
          <thead className="text-left text-lg overflow-scroll w-screen">
            <tr className="text-lg font-semibold">
              <th data-column="name" className="font-semibold">
                Title
              </th>
              <th className="font-semibold" data-column="email">
                Introduction
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
            {fetchedEvents &&
              fetchedEvents.map((data) => (
                <tr
                  key={data.id}
                  className=" h-28 w-full overflow-scroll text-base bg-white rounded-l-lg py-10 hover:shadow-lg hover:bg-light hover:scale-100"
                >
                  <td className="">{data.title}</td>
                  <td className="w-6/12">{data.introduction}</td>
                  <td className="">{data.author}</td>
                  <td>
                    <Link href={`/admin/dashboard/blog/${data.slug}`}>
                      <button className="w-16 rounded-md border bg-primary text-white h-10">
                        Edit
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogDashboard;