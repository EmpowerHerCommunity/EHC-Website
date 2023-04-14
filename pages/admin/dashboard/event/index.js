import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import SideBar from "../../../../src/components/admin/SideBar";
import { useRouter } from "next/router";

const EventDashboard = () => {
  const [fetchedEvents, setFetchedEvents] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(true);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      router.push("/login");
    }
  }, []);

  const handleDelete = (id) => {
    try {
      const deleteFunction = async () => {
        const res = await fetch(
          `https://empowerher.pythonanywhere.com/api/v1/indexapi/events/${id}/`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: "",
          }
        );
      };
      deleteFunction();
      window.location.reload();
    } catch (error) {
      toast.error("Kindly try again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const URL = "https://empowerher.pythonanywhere.com/api/v1/indexapi/events/";

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
    <>
      <section className="xl:hidden h-screen lg:text-2xl md:text-xl text-xl px-4 flex justify-center text-center items-center">
        <h1>
          Sorry, this page is not available on your current screen size. Please
          go back to the
          <Link href="/" legacyBehavior>
            <a className="underline text-primary">home page</a>
          </Link>
          to continue browsing.
        </h1>
      </section>

      <div className="xl:flex hidden 2xl:mx-auto 2xl:container ">
        <div className="w-2/12">
          <SideBar />
        </div>
        <div className="rounded-lg w-10/12 pl-5 mt-11">
          <h1 className="text-4xl">Dashboard: Events</h1>
          {error && <p className="text-lg">{error}</p>}
          <table className="w-full mt-16">
            <thead className="text-left text-lg overflow-scroll w-screen">
              <tr className="text-lg font-semibold">
                <th data-column="name" className="font-semibold">
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
              {fetchedEvents &&
                fetchedEvents.map((data) => (
                  <tr
                    key={data.id}
                    className=" h-16 w-full overflow-scroll mb-4 text-base bg-white rounded-l-lg py-2 hover:shadow-lg"
                  >
                    <td className="">{data.name}</td>
                    <td className="w-6/12">{data.description}</td>
                    <td className="">{data.date}</td>

                    <td>
                      <Link href={`/admin/dashboard/event/${data.id}`} legacyBehavior>
                        <a>
                        <button className="w-14 rounded-md border bg-light text-primary h-10">
                          Edit
                        </button>
                        </a>
                      </Link>
                    </td>

                    <td>
                      <button
                        onClick={() => {
                          handleDelete(data.id);
                        }}
                        className="w-14 rounded-md border bg-primary text-white h-10"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
    </>
  );
};

export default EventDashboard;
