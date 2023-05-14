import { useState, useEffect } from "react";
import md from "markdown-it";
import NavBar from "../../../src/components/NavBar";
import Footer from "../../../src/components/Footer";
import Head from "next/head";

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
    <section className="overflow-y-hidden">
      <NavBar />
      {blogs.results.map((blog) => (
        <>
          <Head>
            <meta charSet="UTF-8" />
            <title>"Empower Her Community"</title>
            <meta name="title" property="og:title" content={blog.title} />
            <meta name="image" property="og:image" content={blog.cover_photo} />
            <meta name="twitter:title" content={blog.title} />
            <meta name="twitter:description" content={blog.introduction} />
            <meta name="twitter:image" content={blog.cover_photo} />
            <meta
              name="author"
              property="og:article:author"
              content={blog.author}
            />
            <meta property="og:description" content={blog.introduction} />
            <meta property="og:url" content="https://empower-her-community.vercel.app/"/>

            <meta name="twitter:card" content="summary_large_image" />

            <meta name="description" content={blog.introduction} />
            <meta
              property="og:site_name"
              content="Empower Her Community"
            />
            <meta property="og:image:secure_url" content={blog.cover_photo} />

            <meta name="twitter:image:alt" content={blog.title} />
          </Head>

          <div className="prose justify-between mx-auto xl:max-w-screen-xl container lg:prose-p:prose-xl prose-p:text-2xl prose-p:leading-10 prose-li:text-xl prose-h3:text-2xl prose-h2:text-3xl lg:max-w-screen-2xl md:max-w-screen-xl max-w-screen-lg text-justify px-10 lg:px-10 pt-6 lg:pt-4">
            <article key={blog.slug}>
            <div className="xl:ml-5 ml-0 md:px-4 lg:px-0">
            <section className=" text-slug flex items-center justify-between max-w-xs lg:text-xl text-2xl">
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

              <div className="max-w-5xl">
                <h1 className="lg:text-4xl text-3xl mt-4 font-semibold">
                  {blog.title}
                </h1>
                <p className="md:text-xl leading-10 text-2xl lg:text-xl">
                  {blog.introduction}
                </p>
              </div>

              <section className="flex items-center -mt-10">
                <div className="">
                  <img
                    src={blog.author_image}
                    alt="author avatar"
                    className="h-28 w-28 object-cover rounded-full"
                  />
                </div>
                <div className="text-2xl ml-6">{blog.author}</div>
              </section>
              </div>

              <div className="-mt-1">
                <img src={blog.cover_photo} className="w-full h-auto" />
              </div>

              <section className="flex justify-between lg:ml-10 max-w-5xl overflow-x-hidden">
                <div className="flex w-full">
                  <div
                    className="overflow-x-hidden"
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
