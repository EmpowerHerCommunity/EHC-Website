import md from "markdown-it";
import NavBar from "../../src/components/NavBar";
import Footer from "../../src/components/Footer";
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
        <title>{blog.title}</title>
        <meta name="description" content={blog.introduction}/>
        <meta property="og:image" content={blog.cover_photo} />
      </Head>
      <NavBar />
      <div className="mx-auto container prose flex justify-between lg:prose-p:prose-xl prose-p:text-2xl prose-p:leading-10 prose-li:text-xl prose-h3:text-2xl  prose-h2:text-4xl max-w-screen-2xl  text-justify px-4 lg:px-10 pt-5 lg:pt-12">
        <article className="py-6">
          <section className=" text-slug flex items-center justify-between lg:w-72 w-64 ml-0 lg:ml-20  lg:text-xl text-xl">
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

          <figcaption className="ml-0 lg:ml-20 mt-2">
            <h1 className="lg:text-5xl text-4xl lg:w-12/12 font-semibold">
              {blog.title}
            </h1>
            <p className="md:text-xl text-black -mt-3 text-xl lg:text-lg lg:w-9/12">
              {blog.introduction}
            </p>
          </figcaption>

          <section className="flex items-center -mt-10 py-0 lg:ml-20 ml-0">
            <figure className="h-16 w-16 rounded-full">
              <img
                src={blog.author_image}
                alt="author avatar"
                className="h-full w-full object-contain rounded-full"
              />
            </figure>
            <figcaption className="text-2xl text-black font-medium ml-6">{blog.author}</figcaption>
          </section>

          <figure className="-mt-1">
            <img src={blog.cover_photo} className="w-full h-96" />
          </figure>

          <section className="flex justify-between lg:ml-20 ml-0">
            <div className="flex w-12/12">
              <div className=""
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
