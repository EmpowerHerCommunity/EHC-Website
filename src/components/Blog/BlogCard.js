import Link from "next/link";
import { sortByDate } from "../../../utils";
import searchImg from "../../../public/blog/searchicon.png";
import Image from "next/image";
import {useState} from "react";

const BlogCard = ({ blogs, isFetching  }) => {
  const sortedBlogs = blogs?.sort(sortByDate);
  const [filteredBlog, setFilteredBlog] = useState("")

  const filtered = filteredBlog
    ? sortedBlogs.filter((blog) =>
          blog.introduction.includes(filteredBlog) || blog.title.includes(filteredBlog) || blog.author.includes(filteredBlog)
      )
    : sortedBlogs;


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
    <>
    <section className="container mx-auto lg:mt-4 mt-7 cursor-pointer">
      <header>
        <nav className="lg:flex md:flex md:justify-between md:items-center lg:justify-between lg:items-center items-center text-sm font-semibold mx-8">
          <div className="lg:block md:block hidden">
            <button className="w-28 h-10 rounded-full border border-black font-semibold bg-blogBtn">
              ALL TOPICS
            </button>
          </div>

          <div className="lg:w-7/12 md:w-6/12 lg:block md:block hidden">
            <ul className="flex justify-between items-center lg:w-11/12">
              <li className="hover:border-b border-primary hover:scale-105">
                WEB
              </li>
              <li className="hover:border-b border-primary hover:scale-105">
                DEVOPS
              </li>
              <li className="hover:border-b border-primary hover:scale-105">
                MOBILE
              </li>
              <li className="hover:border-b border-primary hover:scale-105">
                DESIGN
              </li>
              <li className="hover:border-b border-primary hover:scale-105">
                TESTING
              </li>
            </ul>
          </div>

          <div className="relative mt-0">
            <input
              placeholder="Search"
              value={filteredBlog}
              onChange={(e)=>setFilteredBlog(e.target.value)}
              className="border rounded-full h-10 px-3 placeholder:text-xl placeholder:px-1 text-sm lg:w-80  w-full"
            />
       
          </div>
        </nav>
      </header>
    </section>

      <section className="cursor-pointer pt-3">
        <section className="container px-4 mx-auto grid lg:grid-cols-3 grid-col-1 w-12/12">
          {isFetching && <h1 className="text-xl px-2">Just a minute the blogs are being fetched...</h1> }
          {filtered &&
            filtered.map((blog) => (
              <article className="w-12/12 p-4 mb-4" key={blog.id}>
                <div className="border-2 border-black h-full px-3 py-2 rounded-lg hover:shadow-xl">
                  <Link href={`/blog/${blog.slug}`}>
                    <div>
                      <img
                        src={blog.cover_photo}
                        className="h-48 rounded-lg w-full object-cover object-center mb-6"
                        alt="content"
                      />
                      <section className=" text-slug flex items-center justify-between lg:w-64 w-72 lg:text-lg text-xl">
                        <div className=" font-medium mb-1">
                          {new Date(blog.created).toLocaleDateString(
                            "en-US",
                            options
                          )}
                        </div>
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
                      <h1 className="lg:text-2xl text-2xl font-bold mt-1 mb-1">
                        {blog.title}
                      </h1>
                      <p className="lg:text-lg text-xl leading-relaxed w-11/12 lg:h-36 h-40">
                        {blog.introduction}
                      </p>
                      <section className="flex items-center flex-wrap mt-3 rounded-full">
                        <img
                          src={blog.author_image}
                          alt="author avatar"
                          className="rounded-full w-9 h-9"
                        />
                        <p className="font-semibold text-xl lg:text-xl ml-2 md:mb-1 lg:mb-0">
                          {blog.author}
                        </p>
                      </section>
                      <aside className="flex items-center flex-wrap mb-2 mt-4 text-xl lg:text-lg">
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
      </section>
    </>
  );
};

export default BlogCard;
