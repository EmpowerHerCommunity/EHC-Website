import Link from "next/link";
import { sortByDate } from "../../../utils";
import BlogNewsletter from "./BlogNewsletter";

const BlogCard = ({ blogs }) => {
    // Sort the blogs array by date
  blogs &&  blogs.sort(sortByDate)

  return (
    <>
      <section className="cursor-pointer">
        <section className="container px-5 mx-auto grid lg:grid-cols-2 grid-col-1 w-12/12">
          {blogs &&
            blogs.map((blog) => (
              <article className="w-12/12 p-4 mb-4" key={blog.id}>
                <div className="border-2 border-black h-full px-3 py-2 rounded-lg hover:shadow-xl">
                  <Link href={`/blog/${blog.slug}`}>
                    <div>
                      <img
                        className="h-48 rounded-lg w-full object-cover object-center mb-6"
                        src={blog.cover_photo}
                        alt="content"
                      />
                      <section className="flex">
                        <h2 className="text-sm font-medium mb-1">
                          {new Date(blog.created).toLocaleDateString()}
                        </h2>
                      </section>
                      <h1 className="lg:text-lg text-lg font-bold mt-1 mb-1">
                        {blog.title}
                      </h1>
                      <p className="text-sm leading-relaxed w-11/12 h-20">
                        {blog.introduction}
                      </p>
                      <section className="flex items-center flex-wrap mt-3 rounded-full">
                        <img
                          src={blog.author_image}
                          alt="author avatar"
                          className="rounded-full w-9 h-9"
                        />
                        <p className="font-semibold text-sm ml-2 md:mb-1 lg:mb-0">
                          {blog.author}
                        </p>
                      </section>
                      <aside className="flex items-center flex-wrap mb-2 mt-4 text-sm">
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
