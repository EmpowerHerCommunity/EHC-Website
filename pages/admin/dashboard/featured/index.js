import SideBar from "../../../../src/components/admin/SideBar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from "react-toastify";

const FeaturedDashboard = () => {
  const [fetchedEvents, setFetchedEvents] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(true);
  const router = useRouter();

  const handleDelete = (slug) => {
    try {
      const deleteFunction = async () => {
        const res = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL +
            `/api/v1/indexapi/blogpost/${slug}/`,
          {
            method: "DELETE",
            body: "",
          }
        );
      };
      toast.success("blog successfully deleted");
      deleteFunction();
      setTimeout(() => {
        router.reload();
      }, 2000);
    } catch (error) {
      toast.error("Kindly try again");
    }
  };

  const URL =
    process.env.NEXT_PUBLIC_BASE_URL +
    "/api/v1/indexapi/blogpost/?mode=featured";

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
          go back to the{" "}
          <Link href="/" legacyBehavior>
            <a className="underline text-primary">home page</a>
          </Link>{" "}
          to continue browsing.
        </h1>
      </section>

      <div className="xl:flex hidden">
        <div className="w-2/12">
          <SideBar />
        </div>
        <div className="rounded-lg w-10/12 pl-5 mt-11 container mx-auto">
          <h1 className="text-4xl">Dashboard: Featured</h1>
          {error && <p className="text-lg">{error}</p>}
          <table className="mt-16">
            <thead className="text-left text-lg overflow-scroll w-screen">
              <tr className="text-lg font-semibold">
                <th data-column="name" className="font-semibold">
                  Title
                </th>
                <th className="font-semibold">Description</th>
                <th className="font-semibold">Author</th>
                <th className="font-semibold">options</th>
              </tr>
            </thead>
            <tbody className="cursor-pointer">
              {fetchedEvents &&
                fetchedEvents.map((data) => (
                  <tr
                    key={data.id}
                    className=" h-28 w-full overflow-scroll text-base bg-white rounded-l-lg py-10 hover:shadow-lg hover:bg-light"
                  >
                    <td className="w-3/12">{data.title}</td>
                    <td className="w-5/12">{data.introduction}</td>
                    <td className="">{data.author}</td>
                    <td className="">
                      <Link
                        legacyBehavior
                        href={`/admin/dashboard/featured/${data.slug}`}
                      >
                        <a>
                          <button className="w-16 rounded-md border bg-white text-primary h-10">
                            Edit
                          </button>
                        </a>
                      </Link>

                      <a>
                        <button
                          className="w-16 mx-4 rounded-md border bg-primary text-white h-10"
                          onClick={() => handleDelete(data.slug)}
                        >
                          Delete
                        </button>
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FeaturedDashboard;
