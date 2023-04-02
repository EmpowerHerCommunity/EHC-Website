import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  const [image, setImage] = useState(null);
  const [event, setEvent] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      image: image,
      name: event,
      description: description,
      date: date,
    };
    fetch("https://empowerher.pythonanywhere.com/api/v1/indexapi/events/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': 'tIfyN0JlDcvqynbWN9REaTvroq5nhScL3bfwNdm6pyPHSoxTQLzQWVHtP8v5ltZS'
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
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
      }).catch(error => {
        alert('Error creating new event');
      })
  };

  return (
    <form className="flex flex-col w-full mt-7" onSubmit={handleSubmit}>
      <div className="w-12/12 flex justify-between h-16">
        <div className="w-3/12">
          <label className="text-xl">Image</label>
        </div>
        <div className="w-9/12">
          <input
            type="file"
            required
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
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
            value={event}
            onChange={(e) => {
              setEvent(e.target.value);
            }}
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
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
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
  );
};

export default Create;
