import SideBar from "../../../../src/components/admin/SideBar";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Publish = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/login");
    }
  }, []);

  const [blog, setBlog] = useState({
    mode: "normal",
    cover: "",
    author: "",
    title: "",
    introduction: "",
    description: "",
    authorImage: "",
    tag: "A day in the life",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const upload = ({ target: { files = [] } }) => {
    if (!files[0]) {
      return;
    }
    if (!files[0].type.match("image.*")) {
      return;
    }
    setBlog({ ...blog, cover: files[0] });
  };

  const uploadAuthor = ({ target: { files = [] } }) => {
    if (!files[0]) {
      return;
    }
    if (!files[0].type.match("image.*")) {
      return;
    }
    setBlog({ ...blog, authorImage: files[0] });
  };

  blog.tag === "Communities"
    ? setBlog({ ...blog, tag: "660baf3f-e46f-417b-8bfe-8630505b2fe3" })
    : blog.tag === "Information Corner"
    ? setBlog({ ...blog, tag: "5afdcf88-3aa2-4993-9ca3-0980c7f73cb9" })
    : blog.tag === "Imposter Syndrome"
    ? setBlog({ ...blog, tag: "78da67cc-d3d5-4ea2-9e36-390c45d7f507" })
    : blog.tag === "A day in the life"
    ? setBlog({ ...blog, tag: "091584af-de35-4555-a662-e0d325d92e16" })
    : blog.tag === "Tech Lifestyle"
    ? setBlog({ ...blog, tag: "3104b8b3-5041-49d8-80f4-eff71987676d" })
    : blog.tag === "Career Moves"
    ? setBlog({ ...blog, tag: "c285c121-c886-4434-8b1a-b16e8855d112" })
    : "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("mode", blog.mode);
    data.append("cover_photo", blog.cover);
    data.append("author", blog.author);
    data.append("title", blog.title);
    data.append("introduction", blog.introduction);
    data.append("description", blog.description);
    data.append("author_image", blog.authorImage);
    data.append("tags", [blog.tag]);

    try {
      setLoading(true);
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/v1/indexapi/blogpost/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: data,
        }
      );
      if (response.ok) {
        setLoading(false);
        toast.success("Blog successfully added", {
          position: "top-right",
          autoClose: 5000,
          theme: "light",
        });
        const responseData = await response.json();
        setTimeout(() => {
          router.push("/admin/dashboard/blog");
        }, 2000);
      } else {
        setLoading(false);
        toast.error("Kindly try again", {
          position: "top-right",
          autoClose: 5000,
          theme: "light",
        });
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
      });
    }
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

      <div className="xl:flex hidden">
        <div className="w-2/12">
          <SideBar />
        </div>
        <form
          className=" w-10/12 px-6 flex flex-col mt-10 container mx-auto"
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
                value={blog.mode}
                onChange={(e) => setBlog({ ...blog, mode: e.target.value })}
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
                value={blog.author}
                onChange={(e) => setBlog({ ...blog, author: e.target.value })}
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
                value={blog.title}
                maxLength="55"
                onChange={(e) => {
                  setBlog({ ...blog, title: e.target.value });
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
                value={blog.introduction}
                maxLength="185"
                onChange={(e) => {
                  setBlog({ ...blog, introduction: e.target.value });
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
                value={blog.description}
                onChange={(e) => {
                  setBlog({ ...blog, description: e.target.value });
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
                value={blog.tag}
                onChange={(e) => {
                  setBlog({ ...blog, tag: e.target.value });
                }}
              >
                <option value="A day in the life">A day in the life</option>
                <option value="Communities">Communities</option>
                <option value="Imposter Syndrome">Imposter Syndrome</option>
                <option value="Information Corner">Information Corner</option>
                <option value="Career moves">Career Moves</option>
                <option value="Tech Lifestyle">Tech Lifestyle</option>
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
