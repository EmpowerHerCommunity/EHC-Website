import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Link from "next/link";
import SideBar from "../../../../src/components/admin/SideBar";

const EventEdit = () => {
  const [result, setResult] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const routeId = router.query.id;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResult((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const upload = ({ target: { files = [] } }) => {
    if (!files[0]) {
      return;
    }
    if (!files[0].type.match("image.*")) {
      return;
    }
    setSelectedFile(files[0]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile); 
    formData.append("name", result?.name);
    formData.append("description", result?.description);
    formData.append("date", result?.date);

    try {
      setLoading(true);
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          `/api/v1/indexapi/events/${routeId}/`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: formData,
        }
      );
      const data = await response.json();
      setLoading(false);
      toast.success("event updated");
      setTimeout(() => {
        router.push("/admin/dashboard/event");
      }, 3000);
    } catch (error) {
      setLoading(false);
      toast.error("Kindly try again");
    }
  };

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL +
            `/api/v1/indexapi/events/${routeId}/`
        );
        const data = await response.json();
        setResult(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Kindly try again");
      }
    };
    fetchEvent();
  }, [routeId]);

  return (
    <>
      <section className="xl:hidden h-screen lg:text-2xl md:text-xl text-xl px-4 flex justify-center text-center items-center">
        <h1>
          Sorry, this page is not available on your current screen size. Please
          go back to the{" "}
          <Link className="underline text-primary" href="/" >
          home page
          </Link>{" "}
          to continue browsing.
        </h1>
      </section>
      <div className="flex">
        <div className="w-2/10">
          <SideBar />
        </div>
        <div className="w-10/12 mt-12">
          <form
            className="hidden xl:flex 2xl:mx-auto 2xl:container flex-col"
            onSubmit={handleUpdate}
          >
            <div className="w-12/12 flex justify-between h-16">
              <div className="w-3/12">
                <label className="text-xl">Image</label>
              </div>
              <div className="w-9/12">
                <input
                  type="file"
                  required
                  onChange={(e) => {
                    upload(e);
                  }}
                ></input>
              </div>
            </div>
            <div className="w-12/12 flex justify-between h-24">
              <div className="w-3/12">
                <label className="text-xl">Event</label>
              </div>
              <div className="w-9/12">
                <input
                  type="text"
                  required
                  className="border h-16 rounded-md w-full"
                  value={result?.name}
                  name="name"
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>
            <div className="w-12/12 flex justify-between h-64">
              <div className="w-3/12">
                <label className="text-xl">Description</label>
              </div>
              <div className="w-9/12">
                <textarea
                  type="text"
                  required
                  className="border rounded-md h-56 w-full"
                  value={result?.description}
                  name="description"
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
            <div className="w-12/12 flex justify-between h-20">
              <div className="w-3/12">
                <label className="text-xl">Date</label>
              </div>
              <div className="w-9/12">
                <input
                  type="date"
                  required
                  className="border rounded-sm"
                  value={result?.date}
                  name="date"
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>
            <div className="flex justify-end">
              {loading ? (
                <button className="bg-primary w-32 rounded-md text-light text-xl h-11">
                  Updating...
                </button>
              ) : (
                <button className="bg-primary w-32 rounded-md text-light text-xl h-11">
                  Update
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

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
    </>
  );
};

export default EventEdit;
