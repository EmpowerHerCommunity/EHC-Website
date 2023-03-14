import Link from "next/link";
import { sortByDate } from "../../../utils";
import BlogNewsletter from "./BlogNewsletter";

const BlogCard = ({ posts: blogs }) => {
  return (
    <>
      <section>
        <section className="container px-5 mx-auto grid lg:grid-cols-2 grid-col-1">
          {blogs.map((blog, index) => (
            <article className="xl:w-10/12 p-4 mb-4" key={index}>
              <div className="border-2 h-full border-black px-3 py-2 rounded-lg">
                <Link href ={`/blog/${blog.slug}`}>
                  <div>
                <img
                  className="h-64 rounded-lg w-full object-cover object-center mb-6"
                  src={blog.data.image}
                  alt="content"
                />
                <section className="flex">
                  <h2 className="text-xs font-medium mb-1">{blog.data.date}</h2>
                  <h2 className="mb-1 ml-2 text-xs">{blog.data.read}</h2>
                </section>
                <h1 className="lg:text-2xl text-xl font-bold mt-1 mb-2">
                  {blog.data.title}
                </h1>
                <p className="text-base leading-relaxed">
                  {blog.data.description}
                </p>
                <section className="flex items-center flex-wrap mt-3">
                  <img
                    src={blog.data.image}
                    className="w-8 h-8 rounded-full"
                    alt="writer"
                  />
                  <p className="font-medium ml-2 md:mb-1 lg:mb-0">
                    {blog.data.author}
                  </p>
                </section>
                <aside className="flex items-center flex-wrap mb-2 mt-4">
                  <button className="rounded-2xl border-2 border-black py-1 px-4">
                    {blog.data.tagTwo}
                  </button>
                  <button className="rounded-2xl border-2 border-black py-1 px-4 ml-2">
                    {blog.data.tagOne}
                  </button>
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
