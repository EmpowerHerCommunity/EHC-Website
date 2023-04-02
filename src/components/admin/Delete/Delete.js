import React from "react";

const Delete = ({ handleDel }) => {
  return (
    <section className="justify-center h-48 w-full flex flex-col items-center">
      <section className=" rounded-lg bg-primary w-96 flex flex-col h-96 justify-center items-center ">
        <p className="text-light text-lg font-medium">Are you sure you want to delete this file?</p>
        <div className="flex justify-around w-48 pt-8">
          <button className="hover:scale-110 w-16 rounded-md border bg-primary text-white h-10">
            Yes
          </button>
          <button
            onClick={handleDel}
            className="hover:scale-110 w-16 rounded-md border bg-light text-primary h-10"
          >
            No
          </button>
        </div>
      </section>{" "}
    </section>
  );
};

export default Delete;
