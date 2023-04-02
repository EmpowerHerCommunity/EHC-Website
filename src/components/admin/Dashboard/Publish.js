import React from "react";

const Publish = () => {
  return (
    <form className="flex flex-col w-full mt-7">
      <div className="w-12/12 flex justify-between h-16">
        <div className="w-3/12">
          <label className="text-xl">Mode</label>
        </div>
        <div className="w-9/12">
            <select className="border w-24 h-10 rounded-md px-1">
                <option>normal</option>
                <option>featured</option>
            </select>
        </div>
      </div>
      <div className="w-12/12 flex justify-between h-16">
        <div className="w-3/12">
          <label className="text-xl">Cover Photo</label>
        </div>
        <div className="w-9/12">
          <input type="file"></input>
        </div>
      </div>
      <div className="w-12/12 flex justify-between h-24">
        <div className="w-3/12">
          <label className="text-xl">Author</label>
        </div>
        <div className="w-9/12">
          <input type="text" className="border h-12 rounded-md w-72"></input>
        </div>
      </div>
      <div className="w-12/12 flex justify-between h-24">
        <div className="w-3/12">
          <label className="text-xl">Title</label>
        </div>
        <div className="w-9/12">
          <input type="text" className="border h-16 rounded-md w-full"></input>
        </div>
      </div>
      <div className="w-12/12 flex justify-between h-24">
        <div className="w-3/12">
          <label className="text-xl">Introduction</label>
        </div>
        <div className="w-9/12">
          <input type="text" className="border h-16 rounded-md w-full"></input>
        </div>
      </div>
      <div className="w-12/12 flex justify-between h-64">
        <div className="w-3/12">
          <label className="text-xl">Description</label>
        </div>
        <div className="w-9/12">
          <textarea
            type="text"
            className="border rounded-md h-56 w-full"
          ></textarea>
        </div>
      </div>
      <div className="w-12/12 flex justify-between h-20">
        <div className="w-3/12">
          <label className="text-xl">Author Image</label>
        </div>
        <div className="w-9/12">
          <input type="file"></input>
        </div>
      </div>
      <div className="w-12/12 flex justify-between h-16">
        <div className="w-3/12">
          <label className="text-xl">Tags</label>
        </div>
        <div className="w-9/12">
            <select className="border w-44 h-10 rounded-md px-1">
                <option>web development</option>
                <option>mobile development</option>
            </select>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-primary w-32 rounded-md text-light text-xl h-11">
          Post
        </button>
      </div>
    </form>
  );
};

export default Publish;
