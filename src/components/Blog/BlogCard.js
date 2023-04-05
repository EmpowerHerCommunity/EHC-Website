import Link from "next/link";
import { sortByDate } from "../../../utils";
import { useState, useEffect } from "react";
import AOS from "aos";

const BlogCard = ({ blogs, currentPage, totalPages }) => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  const pageSize = 42;
  const [page, setPage] = useState(currentPage);
  const [newBlog, setNewBlog] = useState(null);
  const [pagination, setPagination] = useState("blogs");

  useEffect(() => {
    const fetchNext = async () => {
      try {
        const response = await fetch(
          `https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/?page=${currentPage}&page_size=${pageSize}`
        );
        const data = await response.json();
        setNewBlog(data.results);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchNext();
  }, [currentPage]);

  const next = () => {
    if (page < totalPages) {
      setPagination(!pagination)
      setPage(page + 1); // return the new page value
      alert("clicked")
    } else {
      setPage(page); // return the current page value if it's already the last page
    }
  };

  const sortedBlogs = blogs?.sort(sortByDate);
  const sortednewBlogs = newBlog?.sort(sortByDate)
  const [filteredBlog, setFilteredBlog] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filtered = filteredBlog
    ? sortedBlogs.filter(
        (blog) =>
          blog.introduction
            .toLowerCase()
            .includes(filteredBlog.toLowerCase()) ||
          blog.title.toLowerCase().includes(filteredBlog.toLowerCase()) ||
          blog.author.toLowerCase().includes(filteredBlog.toLowerCase()) ||
          blog.introduction
            .toUpperCase()
            .includes(filteredBlog.toUpperCase()) ||
          blog.title.toUpperCase().includes(filteredBlog.toUpperCase()) ||
          blog.author.toUpperCase().includes(filteredBlog.toUpperCase())
      )
    : selectedCategory
    ? sortedBlogs.filter(
        (blog) =>
          blog.title.includes(selectedCategory) ||
          blog.description.includes(selectedCategory)
      )
    : sortedBlogs;

  function handleCategoryClick(category) {
    setSelectedCategory(category);
    setFilteredBlog("");
  }

  function handleClick() {
    setSelectedCategory("");
    setFilteredBlog("");
  }
  function calculateReadingTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content?.trim().split(/\s+/).length;
    const readingTimeInMinutes = wordCount / wordsPerMinute;
    const minutes = Math.floor(readingTimeInMinutes);
    const seconds = Math.floor((readingTimeInMinutes - minutes) * 60);
    const readingTime = minutes + (seconds > 30 ? 1 : 0); // round up if more than 30 seconds
    return readingTime;
  }
  const options = { day: "numeric", month: "long", year: "numeric" };
  return (
    <div className="container mx-auto">
      <section className="lg:mt-4 mt-7 cursor-pointer">
        <header className="">
          <nav className="lg:flex md:flex md:justify-between lg:justify-between  items-center text-sm font-semibold mx-8">
            <div className="lg:block md:hidden hidden">
              <button
                onClick={handleClick}
                className="w-28 h-10 hover:bg-light hover:text-primary rounded-full border font-semibold bg-blogBtn"
              >
                ALL TOPICS
              </button>
            </div>

            <div className="lg:w-6/12 md:w-6/12 lg:block md:hidden hidden">
              <ul
                className="flex justify-between items-center lg:w-11/12 text-lg"
                id="tags"
              >
                <li
                  className={`hover:border-b border-primary hover:scale-105 ${
                    selectedCategory === "web"
                  }`}
                  onClick={() => handleCategoryClick("web")}
                >
                  Web
                </li>
                <li
                  className={`hover:border-b border-primary hover:scale-105 ${
                    selectedCategory === "Tech"
                  }`}
                  onClick={() => handleCategoryClick("Tech")}
                >
                  lifestyle
                </li>
                <li
                  className={`hover:border-b border-primary hover:scale-105 ${
                    selectedCategory === "Communities"
                  }`}
                  onClick={() => handleCategoryClick("Communities")}
                >
                  Communities
                </li>

                <li
                  className={`hover:border-b border-primary hover:scale-105 ${
                    selectedCategory === "Design"
                  }`}
                  onClick={() => handleCategoryClick("Design")}
                >
                  Design
                </li>
                <li
                  className={`hover:border-b border-primary hover:scale-105 ${
                    selectedCategory === "Devops"
                  }`}
                  onClick={() => handleCategoryClick("Devops")}
                >
                  Devops
                </li>
              </ul>
            </div>

            <div className="relative mt-0 md:hidden hidden lg:block">
              <input
                placeholder="Search"
                value={filteredBlog}
                onChange={(e) => setFilteredBlog(e.target.value)}
                className="border rounded-full h-10 px-3 placeholder:text-xl placeholder:px-1 text-sm lg:w-80 "
              />
            </div>
          </nav>

          <div className="relative mt-0 lg:hidden block">
            <input
              placeholder="Search"
              value={filteredBlog}
              onChange={(e) => setFilteredBlog(e.target.value)}
              className="border rounded-full h-10 px-3 placeholder:text-xl placeholder:px-1 text-sm w-11/12 ml-5 "
            />
          </div>
        </header>
      </section>

      <section className="cursor-pointer pt-3">
        {pagination === "blogs" && (
          <section className="container px-4 mx-auto grid xl:grid-cols-3 lg:grid-cols-2 grid-col-1 w-12/12">
            {filtered &&
              filtered.map((blog) => (
                <article className="w-12/12 p-4 mb-4" key={blog.id}>
                  <div className="border-2 border-black h-full px-3 py-2 rounded-lg hover:shadow-xl">
                    <Link href={`/blog/${blog.slug}/${blog.id}`}>
                      <div>
                        <img
                          src={blog.cover_photo}
                          className="h-48 rounded-xl w-full object-cover object-center mb-6"
                          alt="content"
                        />

                        <section className=" text-slug flex items-center justify-between lg:w-64 w-96 lg:text-lg text-2xl">
                          <div className=" font-medium mb-1">
                            {new Date(blog.created).toLocaleDateString(
                              "en-US",
                              options
                            )}
                          </div>

                          <div className="border-black h-1 w-1 bg-black rounded-full"></div>
                          <div className="-mt-1">
                            {`${calculateReadingTime(blog.description)}` > 1
                              ? `${calculateReadingTime(
                                  blog.description
                                )} minutes read`
                              : `${calculateReadingTime(
                                  blog.description
                                )} minute read`}
                          </div>
                        </section>
                        <h1 className="lg:text-2xl text-3xl font-bold mt-1 py-2">
                          {blog.title}
                        </h1>
                        <p className="lg:text-lg text-xl leading-relaxed w-11/12 lg:block hidden">
                          {blog.introduction}
                        </p>
                        <section className="flex items-center flex-wrap mt-3 rounded-full">
                          <figure className="h-16 w-16 rounded-full">
                            <img
                              src={blog.author_image}
                              alt="author avatar"
                              className="h-full w-full object-contain rounded-full"
                            />
                          </figure>

                          <p className="font-semibold text-2xl lg:text-xl ml-2 md:mb-1 lg:mb-0">
                            {blog.author}
                          </p>
                        </section>
                        <aside className="flex items-center flex-wrap mb-2 mt-4 text-2xl lg:text-lg">
                          {blog.tags.map((tag) => (
                            <button
                              className="rounded-2xl border border-black py-1 px-4 ml-2"
                              key={tag.id}
                            >
                              {tag.tag}
                            </button>
                          ))}
                        </aside>
                      </div>
                    </Link>
                  </div>
                </article>
              ))}
          </section>
        )}
        <section>
          {pagination != "blogs" && (
            <section className="container px-4 mx-auto grid xl:grid-cols-3 lg:grid-cols-2 grid-col-1 w-12/12">
              {sortednewBlogs &&
                sortednewBlogs.map((blog) => (
                  <article className="w-12/12 p-4 mb-4" key={blog.id}>
                    <div className="border-2 border-black h-full px-3 py-2 rounded-lg hover:shadow-xl">
                      <Link href={`/blog/${blog.slug}/${blog.id}`}>
                        <div>
                          <img
                            src={blog.cover_photo}
                            className="h-48 rounded-xl w-full object-cover object-center mb-6"
                            alt="content"
                          />

                          <section className=" text-slug flex items-center justify-between lg:w-64 w-96 lg:text-lg text-2xl">
                            <div className=" font-medium mb-1">
                              {new Date(blog.created).toLocaleDateString(
                                "en-US",
                                options
                              )}
                            </div>

                            <div className="border-black h-1 w-1 bg-black rounded-full"></div>
                            <div className="-mt-1">
                              {`${calculateReadingTime(blog.description)}` > 1
                                ? `${calculateReadingTime(
                                    blog.description
                                  )} minutes read`
                                : `${calculateReadingTime(
                                    blog.description
                                  )} minute read`}
                            </div>
                          </section>
                          <h1 className="lg:text-2xl text-3xl font-bold mt-1 py-2">
                            {blog.title}
                          </h1>
                          <p className="lg:text-lg text-xl leading-relaxed w-11/12 lg:block hidden">
                            {blog.introduction}
                          </p>
                          <section className="flex items-center flex-wrap mt-3 rounded-full">
                            <figure className="h-16 w-16 rounded-full">
                              <img
                                src={blog.author_image}
                                alt="author avatar"
                                className="h-full w-full object-contain rounded-full"
                              />
                            </figure>

                            <p className="font-semibold text-2xl lg:text-xl ml-2 md:mb-1 lg:mb-0">
                              {blog.author}
                            </p>
                          </section>
                          <aside className="flex items-center flex-wrap mb-2 mt-4 text-2xl lg:text-lg">
                            {blog.tags.map((tag) => (
                              <button
                                className="rounded-2xl border border-black py-1 px-4 ml-2"
                                key={tag.id}
                              >
                                {tag.tag}
                              </button>
                            ))}
                          </aside>
                        </div>
                      </Link>
                    </div>
                  </article>
                ))}
            </section>
          )}
        </section>
        <section className=" container mx-auto flex justify-end mt-10 px-10">
            <button
              onClick={next}
              className="animate-pulse hover:scale-110 bg-primary text-white w-40 h-12 rounded-md text-xl font-medium"
            >
              Read More
            </button>
        </section>
      </section>
    </div>
  );
};

export default BlogCard;
