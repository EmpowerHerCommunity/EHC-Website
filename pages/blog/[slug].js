import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import md from "markdown-it";
import NavBar from "../../src/components/NavBar";

const Slug = () => {
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
    <section className="container mx-auto">
      <NavBar />
      <div className="prose lg:prose-md max-w-screen-xl text-justify px-14 lg:px-28 pt-6 lg:pt-14">
        {blogs &&
          blogs
            .filter((blog) => blog.slug === routeId)
            .map((blog) => (
              <article key={blog.slug} className="py-6">
                <section className=" text-slug flex items-center justify-between w-64 text-lg">
                  <div className=" font-medium mb-1">
                    {new Date(blog.created).toLocaleDateString(
                      "en-US",
                      options
                    )}
                  </div>
                  <div className="-mt-1">
                    {`${calculateReadingTime(blog.description)}` > 1
                      ? `${calculateReadingTime(blog.description)} minutes read`
                      : `${calculateReadingTime(blog.description)} minute read`}
                  </div>
                </section>
                <figcaption>
                  <h1 className="lg:text-4xl text-3xl md-96 lg:w-12/12 font-semibold">{blog.title}</h1>
                  <p className="md:text-lg text-base lg:text-lg lg:w-9/12">{blog.introduction}</p>
                </figcaption>

                <section className="flex items-center -mt-8 py-0 ">
                  <figure className="">
                    <img
                      src={blog.author_image}
                      className="rounded-full h-10 w-10"
                    />
                  </figure>
                  <figcaption className="text-lg ml-6">{blog.author}</figcaption>
                </section>

                <figure className="-mt-1">
                  <img
                    src={blog.cover_photo}
                    className="w-full lg:h-96"
                  />
                </figure>

                <div 
                  dangerouslySetInnerHTML={{
                    __html: md().render(blog.description),
                  }}
                />
              </article>
            ))}
      </div>
    </section>
  );
};

export default Slug;
