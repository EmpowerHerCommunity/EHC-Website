import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import md from "markdown-it";
import NavBar from "../../src/components/NavBar";
import Footer from "../../src/components/Footer";
import BlogCard from "../../src/components/Blog/BlogCard";
import Image from "next/image";

const Slug = ({ blog }) => {
  const router = useRouter();
  const routeId = router.query.slug;
  console.log(routeId);

  const [blogs, setBlogs] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  function calculateReadingTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content?.trim().split(/\s+/).length;
    const readingTimeInMinutes = wordCount / wordsPerMinute;
    const minutes = Math.floor(readingTimeInMinutes);
    const seconds = Math.floor((readingTimeInMinutes - minutes) * 60);
    const readingTime = minutes + (seconds > 30 ? 1 : 0); // round up if more than 30 seconds
    return readingTime;
  }

  const URL = "https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/";

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setBlogs(data.results);
        setIsFetching(false);
      } catch (error) {
        setError(error);
        console.log("Failed to fetch events data: ", error);
      }
    }
    if (isFetching) {
      fetchBlogs();
    }
  }, [isFetching]);

  const options = { day: "numeric", month: "long", year: "numeric" };

  return (
    <section className="">
      <NavBar />
      <div className="prose flex justify-between prose-h2:prose-2xl prose-h3:prose-xl prose-h4:prose-xl prose-p:prose-2xl lg:prose-p:prose-xl  max-w-screen-2xl text-justify px-10 lg:px-16 pt-6 lg:pt-10">
        {blogs &&
          blogs
            .filter((blog) => blog.slug === routeId)
            .map((blog) => (
              <article key={blog.slug} className="py-6">
                <section className=" text-slug flex items-center justify-between lg:w-72 w-96 ml-20  lg:text-xl text-2xl">
                  <div className=" font-medium mb-1">
                    {new Date(blog.created).toLocaleDateString(
                      "en-US",
                      options
                    )}
                  </div>
                  <div className="border-black h-1 w-1 bg-black rounded-full"></div>

                  <div className="-mt-1">
                    {`${calculateReadingTime(blog.description)}` > 1
                      ? `${calculateReadingTime(blog.description)} minutes read`
                      : `${calculateReadingTime(blog.description)} minute read`}
                  </div>
                </section>

                <figcaption className="ml-20">
                  <h1 className="lg:text-4xl text-3xl md-96 lg:w-12/12 font-semibold">
                    {blog.title}
                  </h1>
                  <p className="md:text-lg text-2xl lg:text-lg lg:w-9/12">
                    {blog.introduction}
                  </p>
                </figcaption>

                <section className="flex items-center -mt-10 py-0 ml-20">
                  <figure className="h-16 w-16 rounded-full">
                    <img
                      src={blog.author_image}
                      alt="author avatar"
                      className="h-full w-full object-contain rounded-full"
                    />
                  </figure>
                  <figcaption className="text-2xl ml-6">
                    {blog.author}
                  </figcaption>
                </section>

                <figure className="-mt-1">
                  <img src={blog.cover_photo} className="w-full h-auto" />
                </figure>

                <section className="flex justify-between  ml-20">
                  <div className="flex w-10/12">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: md().render(blog.description),
                      }}
                    />
                  </div>
                  <figure className="flex flex-col h-64 justify-between w-1/12 mt-20 cursor-pointer">
                    <img
                      src="/blog/facebook.svg"
                      alt="facebook"
                      className="h-11 w-11 border border-black p-2"
                    />
                    <img
                      src="/blog/linkedin.svg"
                      alt="linkedIn"
                      className="h-11 w-11 border border-black p-2"
                    />
                    <img
                      src="/blog/twitter.svg"
                      alt="twitter"
                      className="h-11 w-11 border border-black p-2"
                    />
                    <img
                      src="/blog/copy.svg"
                      alt="copy"
                      className="h-11 w-11 border border-black p-2"
                    />
                  </figure>
                </section>
              </article>
            ))}
      </div>
      <section>
        <Footer />
      </section>
    </section>
  );
};

export default Slug;

export async function getStaticPaths() {
  const response = await fetch("https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/");
  const blogs = await response.json();

  const paths = blogs.results.map((blog) => ({
    params: { slug: blog.slug, id: blog.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  // retrieve the blog data using context.params.slug and context.params.id
  const { slug, id } = context.params;
  // fetch the blog data from the database using the slug and id
  const response = await fetch(`https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/${slug}/${id}`);
  const data = await response.json();

  return {
    props: {
      blog: data, // should be data, not blog
    },
  };
}
