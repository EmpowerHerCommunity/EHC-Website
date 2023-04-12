import md from "markdown-it";
import NavBar from "../../src/components/NavBar";
import Footer from "../../src/components/Footer";
import SEO from "@bradgarropy/next-seo";
import Head from "next/head";

const Slug = ({ blog }) => {
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
    <section className="">
      <Head>
        <meta name="title" property="og:title" content={blog.title} />
        <meta name="image" property="og:image" content={blog.cover_photo} />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.introduction} />
        <meta name="twitter:image" content={blog.cover_photo} />
        <meta name="author" property="og:article:author" content={blog.author} />
        <meta name="description" property="og:article:section" content={blog.introduction} />
        <meta
          property="og:url"
          content="https://empower-her-community.vercel.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="description"
          property="og:description"
          content={blog.introduction}
        />
        <meta name="twitter:image:alt" content={blog.title} />
      </Head>

      {/* <SEO
        title={blog.title}
        icon={blog.cover_photo}
        description={blog.introduction}
        keywords={["EHC", "Community", "Empower her community", "EHC blog"]}
        twitter={{
          card: "summary_large_image",
          site: "@empowerhercommunity",
          title: blog.title,
          description: blog.introduction,
          image: blog.cover_photo,
        }}
        facebook={{
          type: "article",
          image: blog.cover_photo,
        }}
      /> */}

      <NavBar />
      <div className=" prose flex justify-between lg:prose-p:prose-xl prose-p:text-2xl prose-p:leading-10 prose-li:text-xl prose-h3:text-2xl  prose-h2:text-3xl max-w-screen-2xl  text-justify px-6 lg:px-10 pt-5 lg:pt-8">
        <article className="py-6 container mx-auto">
          <section className=" text-slug flex items-center justify-between lg:w-72 w-80 ml-0 lg:ml-20  lg:text-xl text-2xl">
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

          <div className="ml-0 lg:ml-20 mt-2">
            <h1 className="lg:text-5xl text-4xl lg:w-12/12 font-semibold">
              {blog.title}
            </h1>
            <p className="md:text-2xl text-black -mt-3 text-2xl lg:text-lg lg:w-9/12 w-11/12 leading-10">
              {blog.introduction}
            </p>
          </div>

          <section className="flex items-center -mt-5 py-0 lg:ml-20 ml-0">
            <div className="rounded-full">
              <img
                src={blog.author_image}
                alt="author avatar"
                className="h-16 w-16 object-contain rounded-full"
              />
            </div>
            <div className="text-2xl text-black font-medium ml-6">
              {blog.author}
            </div>
          </section>

          <div className="-mt-1">
            <img src={blog.cover_photo} className="md:w-full w-11/12  h-96" />
          </div>

          <section className="flex justify-between lg:ml-20 ml-0">
            <div className="flex">
              <div
                className="w-11/12"
                dangerouslySetInnerHTML={{
                  __html: md().render(blog.description),
                }}
              />
            </div>
          </section>
        </article>
      </div>
      <Footer />
    </section>
  );
};

export default Slug;

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const response = await fetch(
    `https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/${slug}/`
  );

  const data = await response.json();
  return {
    props: {
      blog: data,
    },
  };
}
