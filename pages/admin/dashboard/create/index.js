import SideBar from "../../../../src/components/admin/SideBar";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Create = () => {

  const [image, setImage] = useState(null);
  const [event, setEvent] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);

  const router = useRouter()

    useEffect(() => {
      const token = localStorage.getItem("accessToken")
      if (!token) {
        router.push("/login");
      }
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", image);
    data.append("name", event);
    data.append("description", description);
    data.append("date", date);

    try {
      const response = await fetch(
        "https://empowerher.pythonanywhere.com/api/v1/indexapi/events/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${getCookie("accessToken")}`,
          },
          body: data,
        }
      );

      if (response.ok) {
        toast.warning("Event successfully added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        window.location.reload();
      }
    } catch (error) {
      toast.error("A network error occurred", {
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

  const upload = ({ target: { files = [] } }) => {
    if (!files[0]) {
      return;
    }
    if (!files[0].type.match("image.*")) {
      return;
    }
    setImage(files[0]);
  };

  return (
    <div className="flex ">
      <div className="w-2/12">
        <SideBar />
      </div>
      <form
        className="flex flex-col px-5 mt-10 w-10/12"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h1 className="text-4xl">Add Event</h1>
        <div className="w-12/12 flex justify-between h-16 mt-16">
          <div className="w-3/12">
            <label className="text-lg">Image</label>
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
            <label className="text-lg">Event</label>
          </div>
          <div className="w-9/12">
            <input
              type="text"
              required
              className="border h-16 rounded-md w-full"
              value={event}
              onChange={(e) => {
                setEvent(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="w-12/12 flex justify-between h-64">
          <div className="w-3/12">
            <label className="text-lg">Description</label>
          </div>
          <div className="w-9/12">
            <textarea
              type="text"
              required
              className="border rounded-md h-56 w-full"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="w-12/12 flex justify-between h-20">
          <div className="w-3/12">
            <label className="text-lg">Date</label>
          </div>
          <div className="w-9/12">
            <input
              type="date"
              required
              className="border rounded-sm"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-primary w-32 rounded-md text-light text-xl h-11">
            Post
          </button>
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
      </form>
    </div>
  );
};

export default Create;
