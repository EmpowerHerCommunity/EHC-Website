import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";

function Featured() {
  const [featuredBlog, setFeaturedBlog] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const Hero = () => {
    useEffect(() => {
      AOS.init({ duration: 2500 });
      AOS.refresh();
    }, []);
  };

  useEffect(() => {
    const FetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL +
            "/api/v1/indexapi/blogpost/?mode=featured"
        );
        const data = await response.json();
        setFeaturedBlog(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    FetchBlogs();
    console.log(featuredBlog);
  }, []);

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
      {loading && (
        <article className="cursor-pointer bg-slate-100 animate-pulse h-screen w-full lg:block hidden flex-col container mx-auto px-6 py-7 relative"></article>
      )}
      <article className="cursor-pointer lg:block hidden flex-col container mx-auto px-6 py-7 relative">
        {error && <p>{error.message}</p>}
        {featuredBlog &&
          featuredBlog.results.map((feature) => (
            <Link href={`/blog/featured/${feature.slug}`}>
              <div key={feature.id}>
                <div data-aos="fade-right">
                  <img
                    src={feature?.cover_photo}
                    alt="article cover"
                    className="w-full lg:h-auto h-56 rounded-md"
                  />
                </div>
                <div className="lg:absolute static lg:max-h-full max-h-80 bottom-28 left-0 lg:left-16 text-black lg:text-black">
                  <div className="lg:w-7/12 w-full">
                    <section className=" text-black font-semibold flex items-center justify-between lg:w-72 lg:mt-10 mt-0 xl:mt-0 w-80 ml-0 lg:text-xl text-xl">
                      <div className=" mb-1">
                        {new Date(feature.created).toLocaleDateString(
                          "en-US",
                          options
                        )}
                      </div>
                      <div className="border-white h-1 w-1 bg-white rounded-full"></div>

                      <div className="-mt-1">
                        {`${calculateReadingTime(feature.description)}` > 1
                          ? `${calculateReadingTime(
                              feature.description
                            )} minutes read`
                          : `${calculateReadingTime(
                              feature.description
                            )} minute read`}
                      </div>
                    </section>
                    <h1 className="mb-4 lg:text-5xl text-3xl pt-4 font-semibold">
                      {feature.title}
                    </h1>
                    <p className="lg:text-xl text-2xl">
                      {feature.introduction}
                    </p>
                  </div>
                  <section className="max-w-md flex items-center">
                    <div className="rounded-full h-20 my-4 w-20">
                      <img
                        src={feature.author_image}
                        className="w-full h-full rounded-full"
                        alt="author avatar"
                      />
                    </div>

                    <p className="lg:text-xl text-2xl ml-6 font-semibold">
                      {feature.author}
                    </p>
                  </section>
                  <aside className="py-6 w-full">
                    {feature.tags.map((tag) => (
                      <button className="rounded-2xl border  border-black lg:border-white py-1 px-4 ml-2 text-2xl">
                        {tag.tag}
                      </button>
                    ))}
                  </aside>
                </div>
              </div>
            </Link>
          ))}
      </article>
    </>
  );
}

export default Featured;
