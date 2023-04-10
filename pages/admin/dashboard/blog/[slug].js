import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Link from "next/link";

const blogEdit = () => {
  const [result, setResult] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const router = useRouter();
  const routeId = router.query.slug;

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    if (!token) {
      router.push("/login");
    }
  }, []);

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

  const authorUpload = ({ target: { files = [] } }) => {
    if (!files[0]) {
      return;
    }
    if (!files[0].type.match("image.*")) {
      return;
    }
    setSelectedAuthor(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("mode", result?.mode); 
    formData.append("cover_photo", selectedFile); 
    formData.append("title", result?.title);
    formData.append("description", result?.description);
    formData.append("introduction", result?.introduction);
    formData.append("author", result?.author);
    formData.append("author_image", selectedAuthor); 
    formData.append("tags[]", result?.tags);

 
    try {
      const response = await fetch(
        `https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/${routeId}/`,
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
          `https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/${routeId}/`
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
        <div className="w-2/12">
          <label className="text-xl">Mode</label>
        </div>
        <div className="w-10/12">
          <select
            className="border w-24 h-10 rounded-md px-1"
            value={result?.mode}
            name="mode"
            onChange={handleInputChange}
            >
            <option value="normal">normal</option>
            <option value="featured">featured</option>
          </select>
        </div>
      </div>
        
        <div className="w-12/12 flex justify-between h-16">
          <div className="w-2/12">
            <label className="text-xl">Cover Photo</label>
          </div>
          <div className="w-10/12">
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
          <div className="w-2/12">
            <label className="text-xl">Title</label>
          </div>
          <div className="w-10/12">
            <input
              type="text"
              required
              className="border h-10 rounded-md w-48 px-2"
              value={result?.title}
              name="title"
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
    
        <div className="w-12/12 flex justify-between h-20">
          <div className="w-2/12">
            <label className="text-xl">Introduction</label>
          </div>
          <div className="w-10/12">
            <textarea
              required
              className="border w-full h-14 rounded-md px-2 py-2"
              value={result?.introduction}
              name="introduction"
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        <div className="w-12/12 flex justify-between h-64">
          <div className="w-2/12">
            <label className="text-xl">Description</label>
          </div>
          <div className="w-10/12">
            <textarea
              type="text"
              required
              className="border rounded-md h-56 w-full px-2 py-2"
              value={result?.description}
              name="description"
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        <div className="w-12/12 flex justify-between h-16">
          <div className="w-2/12">
            <label className="text-xl">Author Image</label>
          </div>
          <div className="w-10/12">
            <input
              type="file"
              required
              onChange={(e) => {
                authorUpload(e);
              }}
            ></input>
          </div>
        </div>

        <div className="w-12/12 flex justify-between h-24">
          <div className="w-2/12">
            <label className="text-xl">Author</label>
          </div>
          <div className="w-10/12">
            <input
              type="text"
              required
              className="border h-10 rounded-md w-48 px-2"
              value={result?.author}
              name="author"
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
        <div className="w-12/12 flex justify-between h-16">
        <div className="w-2/12">
          <label className="text-xl">Tags</label>
        </div>
        <div className="w-10/12">
          <select
            className="border w-44 h-10 rounded-md px-1"
            value={result?.tags}
            name="tags"
            onChange={handleInputChange}
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
      </form>

      <section className="xl:hidden h-screen lg:text-2xl md:text-xl text-xl px-4 flex justify-center text-center items-center">
        <h1>
          Sorry, this page is not available on your current screen size. Please
          go back to the
          <Link href="/">
            <a className="underline text-primary">home page</a>
          </Link>
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

export default blogEdit;
