import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Publish = () => {
  const [mode, setMode] = useState("normal");
  const [cover, setCover] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [description, setDescription] = useState("");
  const [authorImage, setAuthorImage] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      mode: mode,
      cover_photo: cover,
      author: author,
      title: title,
      introduction: introduction,
      description: description,
      authorImage: authorImage,
      tags: tags,
    };
    const PostData = async () => {
      try {
        const response = await fetch(
          "https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
              "X-CSRFToken":
                "LREWStnMGUAvgu1nm3wDPBfcltDRcMRnlkEUSG0xsgUMAvnkpFePBDreMb3zgnEu",
            },
            body: JSON.stringify(data),
          }
        );
        toast.warning("Blog successfully added", {
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
        alert(error.message);
      }
    };
    PostData();
  };
  return (
    <form className="flex flex-col w-full mt-7" onSubmit={handleSubmit}>
      <div className="w-12/12 flex justify-between h-16">
        <div className="w-3/12">
          <label className="text-xl">Mode</label>
        </div>
        <div className="w-9/12">
          <select
            className="border w-24 h-10 rounded-md px-1"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="normal">normal</option>
            <option value="featured">featured</option>
          </select>
        </div>
      </div>
      <div className="w-12/12 flex justify-between h-16">
        <div className="w-3/12">
          <label className="text-xl">Cover Photo</label>
        </div>
        <div className="w-9/12">
          <input
            type="file"
            value={cover}
            onChange={(e) => {
              setCover(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="w-12/12 flex justify-between h-24">
        <div className="w-3/12">
          <label className="text-xl">Author</label>
        </div>
        <div className="w-9/12">
          <input
            type="text"
            className="border h-12 rounded-md w-72"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="w-12/12 flex justify-between h-24">
        <div className="w-3/12">
          <label className="text-xl">Title</label>
        </div>
        <div className="w-9/12">
          <input
            type="text"
            className="border h-16 rounded-md w-full"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="w-12/12 flex justify-between h-24">
        <div className="w-3/12">
          <label className="text-xl">Introduction</label>
        </div>
        <div className="w-9/12">
          <input
            type="text"
            className="border h-16 rounded-md w-full"
            value={introduction}
            onChange={(e) => {
              setIntroduction(e.target.value);
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
          <label className="text-xl">Author Image</label>
        </div>
        <div className="w-9/12">
          <input
            type="file"
            value={authorImage}
            onChange={(e) => {
              setAuthorImage(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="w-12/12 flex justify-between h-16">
        <div className="w-3/12">
          <label className="text-xl">Tags</label>
        </div>
        <div className="w-9/12">
          <select
            className="border w-44 h-10 rounded-md px-1"
            onChange={(e) => {
              setTags(e.target.value);
            }}
          >
            <option value="Web Development">Web Development</option>
            <option value="Mobile Development">Mobile Development</option>
          </select>
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

export default Publish;
