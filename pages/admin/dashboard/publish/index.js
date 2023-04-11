import SideBar from "../../../../src/components/admin/SideBar";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Publish = () => {
  const [mode, setMode] = useState("normal");
  const [cover, setCover] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [description, setDescription] = useState("");
  const [authorImage, setAuthorImage] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false)

  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/login");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("mode", mode);
    data.append("cover_photo", cover);
    data.append("author", author);
    data.append("title", title);
    data.append("introduction", introduction);
    data.append("description", description);
    data.append("author_image", authorImage);
    // Append tags to the FormData object
    for (let i = 0; i < tags.length; i++) {
      data.append("tags", tags[i]);
    }

    try {
      setLoading(true)
      const response = await fetch(
        "https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: data,
        }
      );
      if (response.ok) {
        setLoading(false)
        toast.info("Blog successfully added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const responseData = await response.json();
        setTimeout(() => {
          router.push("/admin/dashboard/blog")
        }, 500);
      } else {
        setLoading(false)
        toast.error("Kindly try again", {
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
    } catch (error) {
      setLoading(false)
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
    setCover(files[0]);
  };

  const uploadAuthor = ({ target: { files = [] } }) => {
    if (!files[0]) {
      return;
    }
    if (!files[0].type.match("image.*")) {
      return;
    }
    setAuthorImage(files[0]);
  };

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

      <div className="xl:flex hidden 2xl:mx-auto 2xl:container ">     
        <div className="w-2/12">
          <SideBar />
        </div>
        <form
          className=" w-10/12 px-6 flex flex-col mt-10"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl">Publish</h1>
          <div className="w-12/12 flex justify-between h-16 mt-16">
            <div className="w-3/12">
              <label className="text-lg">Mode</label>
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
              <label className="text-lg">Cover Photo</label>
            </div>
            <div className="w-9/12">
              <input
                type="file"
                onChange={(e) => {
                  upload(e);
                }}
              ></input>
            </div>
          </div>
          <div className="w-12/12 flex justify-between h-24">
            <div className="w-3/12">
              <label className="text-lg">Author</label>
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
          <div className="w-12/12 flex justify-between h-20">
            <div className="w-3/12">
              <label className="text-lg">Author Image</label>
            </div>
            <div className="w-9/12">
              <input
                type="file"
                onChange={(e) => {
                  uploadAuthor(e);
                }}
              ></input>
            </div>
          </div>
          <div className="w-12/12 flex justify-between h-24">
            <div className="w-3/12">
              <label className="text-lg">Title</label>
            </div>
            <div className="w-9/12">
              <input
                type="text"
                className="border h-16 rounded-md w-full"
                value={title}
                maxLength="55"

                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="w-12/12 flex justify-between h-24">
            <div className="w-3/12">
              <label className="text-lg">Introduction</label>
            </div>
            <div className="w-9/12">
              <input
                type="text"
                className="border h-16 rounded-md w-full"
                value={introduction}
                maxLength="185"
                onChange={(e) => {
                  setIntroduction(e.target.value);
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
                className="border rounded-md h-56 w-full"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
          </div>

          <div className="w-12/12 flex justify-between h-16">
            <div className="w-3/12">
              <label className="text-lg">Tags</label>
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
          {loading ? (
            <button className="bg-primary w-32 rounded-md text-light text-xl h-11">
              Publishing...
            </button>
          ) : (
            <button className="bg-primary w-32 rounded-md text-light text-xl h-11">
              Publish
            </button>
          )}
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
    </>
  );
};

export default Publish;
