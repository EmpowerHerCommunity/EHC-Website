import { useEffect, useState } from "react";
import Link from "next/link";

function Featured() {
  const [featuredBlog, setFeaturedBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/?mode=featured"
        );
        const data = await response.json();
        setFeaturedBlog(data);
      } catch (error) {
        setError(error.message);
      }
    };
    FetchBlogs();
    console.log(featuredBlog);
  }, []);
  console.log(featuredBlog);

  return (
    <article className="cursor-pointer lg:block hidden flex-col container mx-auto px-6 lg:py-10 py-4 relative">
      {featuredBlog &&
        featuredBlog.results.map((feature) => (
          <Link href={`/blog/featured/${feature.slug}`}>
            <div key={feature.id}>
              <figure>
                <img
                  src={feature.cover_photo}
                  alt="article cover"
                  className="w-full lg:h-auto h-56"
                />
              </figure>
              <div className="lg:absolute static max-h-80 bottom-28 left-0 lg:left-16 text-black lg:text-light">
                <figcaption className="lg:w-7/12 w-full">
                  <h1 className="mb-4 lg:text-5xl text-3xl pt-4 font-semibold">
                    {feature.title}
                  </h1>
                  <p className="lg:text-xl text-2xl">{feature.introduction}</p>
                </figcaption>
                <section className="py-4 flex items-center">
                  <img
                    src={feature.author_image}
                    className="w-10 h-10 rounded-full"
                    alt="author avatar"
                  />
                  <p className="lg:text-xl text-2xl ml-6 font-semibold">
                    {feature.author}
                  </p>
                </section>
                <aside className="py-2 w-full">
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
  );
}

export default Featured;
