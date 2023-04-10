import { useState, useEffect } from "react";
import md from "markdown-it";
import NavBar from "../../../src/components/NavBar";
import Footer from "../../../src/components/Footer";
import SEO from "@bradgarropy/next-seo";

const Slug = ({ blogs }) => {
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
    <section>
      <NavBar />
      {blogs.results.map((blog) => (
        <>
          <SEO
            title={blog.title}
            icon={blog.cover_photo}
            description={blog.introduction}
            keywords={["EHC", "Community", "Empower her community", "EHC blog"]}
            twitter={{
              image: blog.cover_photo,
              site: "@empowerhercommunity",
              card: "summary_large_image",
            }}
            facebook={{
              image: blog.cover_photo,
              type: "article",
            }}
          />
          <div className="mx-auto container prose flex justify-between prose-h2:prose-2xl prose-h3:prose-xl prose-h4:prose-xl prose-p:prose-2xl lg:prose-p:prose-xl  max-w-screen-2xl text-justify px-4 lg:px-12 pt-6 lg:pt-8">
            <article key={blog.slug} className="py-6">
              <section className=" text-slug flex items-center justify-between lg:w-72 w-96 lg:ml-20 ml-0 lg:text-xl text-2xl">
                <div className=" font-medium mb-1">
                  {new Date(blog.created).toLocaleDateString("en-US", options)}
                </div>
                <div className="border-black h-1 w-1 bg-black rounded-full"></div>

                <div className="-mt-1">
                  {`${calculateReadingTime(blog.description)}` > 1
                    ? `${calculateReadingTime(blog.description)} minutes read`
                    : `${calculateReadingTime(blog.description)} minute read`}
                </div>
              </section>

              <div className="lg:ml-20 ml-0">
                <h1 className="lg:text-4xl text-3xl md-96 lg:w-12/12 font-semibold">
                  {blog.title}
                </h1>
                <p className="md:text-lg text-2xl lg:text-lg lg:w-9/12">
                  {blog.introduction}
                </p>
              </div>

              <section className="flex items-center -mt-5 py-0 lg:ml-20 ml-0">
                <div className=" rounded-full">
                  <img
                    src={blog.author_image}
                    alt="author avatar"
                    className="h-16 w-16 object-contain rounded-full"
                  />
                </div>
                <div className="text-2xl ml-6">{blog.author}</div>
              </section>

              <div className="-mt-1">
                <img src={blog.cover_photo} className="w-full h-auto" />
              </div>

              <section className="flex justify-between lg:ml-20 ml-0">
                <div className="flex w-12/12">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: md().render(blog.description),
                    }}
                  />
                </div>
              </section>
            </article>
          </div>
        </>
      ))}
      <Footer />
    </section>
  );
};

export default Slug;

export async function getServerSideProps({}) {
  const response = await fetch(
    "https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/?mode=featured"
  );

  const data = await response.json();
  return {
    props: {
      blogs: data,
    },
  };
}
