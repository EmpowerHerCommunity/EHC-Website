import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Link from "next/link";

const eventEdit = () => {
  const [result, setResult] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile); // append selected file to form data
    formData.append("name", result?.name);
    formData.append("description", result?.description);
    formData.append("date", result?.date);

    try {
      const response = await fetch(
        `https://empowerher.pythonanywhere.com/api/v1/indexapi/events/${routeId}/`,
        {
          method: "PATCH",
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(
          `https://empowerher.pythonanywhere.com/api/v1/indexapi/events/${routeId}/`
        );
        const data = await response.json();
        setResult(data);
        console.log(data);
      } catch (error) {}
    };
    fetchEvent();
  }, [routeId]);

  return (
    <>
      <form className="hidden xl:flex mx-auto container flex-col mt-7" onSubmit={handleSubmit}>
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
          <button className="bg-primary w-32 rounded-md text-light text-xl h-11">
            Post
          </button>
        </div>
      </form>

      <section className="xl:hidden h-screen lg:text-2xl md:text-xl text-xl px-4 flex justify-center text-center items-center">
        <h1>
          Sorry, this page is not available on your current screen size. Please
          go back to the{" "}
          <Link href="/">
            <a className="underline text-primary">home page</a>
          </Link>{" "}
          to continue browsing.
        </h1>
      </section>

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

export default eventEdit;
