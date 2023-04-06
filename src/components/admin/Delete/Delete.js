import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Delete = ({ handleDel, eventId }) => {
  const handleDelete = (id) => {
    const deleteFunction = async () => {
      try {
        const res = await fetch(
          `https://empowerher.pythonanywhere.com/api/v1/indexapi/events/${id}/`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "X-CSRFToken":
                "tIfyN0JlDcvqynbWN9REaTvroq5nhScL3bfwNdm6pyPHSoxTQLzQWVHtP8v5ltZS",
            },
            body: "",
          }
        );
        toast.warning("Event successfully deleted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (error) {
        toast.warning("Error occured kindly try again later", {
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

    deleteFunction();
  };

  return (
    <section className="">
      <section className=" rounded-lg bg-primary w-96 flex flex-col h-40 justify-center items-center ">
        <p className="text-light text-lg font-medium">
          Are you sure you want to delete this file?
        </p>
        <div className="flex justify-around w-48 pt-8">
          <button
            onClick={() => {
              handleDelete(eventId);
            }}
            className="hover:scale-110 w-16 rounded-md border bg-primary text-white h-10"
          >
            Yes
          </button>
          <button
            onClick={handleDel}
            className="hover:scale-110 w-16 rounded-md border bg-light text-primary h-10"
          >
            No
          </button>
        </div>
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
    </section>
  );
};

export default Delete;
