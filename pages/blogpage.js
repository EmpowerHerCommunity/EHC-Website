import Image from "next/image";
import Header from "../public/blog/header.svg";
import BlogNewsletter from "../src/components/BlogNewsletter";
import NavBar from "../src/components/NavBar";

const BlogPage = () => {
  const blogs = [
    {
      date: "4 March 2023",
      read: "5 Minutes Read",
      blogImage: "/blog/blogHeader.svg",
      title: "Why CSS units matter to your responsive website designs",
      description:
        "Let's discuss using CSS units to create fully responsive websites that size and resize elements. Plus, how to decide on the best units for each situation.",
      author: "Aniekwe Jessica",
      authorImage: "/blog/author.svg",
      tag: ["CSS", "React"],
      introduction: `Everything in life is measured.
        Time is measured, the food we eat is measured, the places we travel to are measured… 
        As humans, we like to give things specific measurements. 
        Units of measurement are standard quantities that are used to express an amount of a certain thing, like meters (distance), kilograms (weight), seconds (time), or Celsius (temperature).
        Creating websites involves building responsive layouts. 
        You have to size, resize, and position elements on your webpage based on the screen size of your visitors — there’s no way you can create a perfectly responsive website without using the appropriate CSS units of measurement. 
        The CSS units of measurement that we will cover in this article will help us to understand how to create a fully responsive websites, size and resize elements on our website appropriately, and how to figure out the best units to use.`,
      headingOne: "CSS Units in Responsive Design",
    },
  ];
  return (
    <>
      <NavBar />
      {blogs &&
        blogs.map((blog) => (
          <>
            <article className="container mx-auto lg:ml-40">
              <figcaption className="lg:w-9/12 w-12/12 flex flex-col h-feature px-10 justify-center text-black">
                <hgroup className="flex justify-between w-56 items-center text-sm">
                  <h4>{blog.date}</h4>
                  <div className="h-2 w-2 bg-black rounded-full border"></div>
                  <h4>{blog.read}</h4>
                </hgroup>
                <hgroup>
                  <h1 className="text-sm lg:text-5xl py-4">{blog.title}</h1>
                  <p className="text-sm lg:text-lg">{blog.description}</p>
                </hgroup>
                <div className=" flex justify-between w-40 items-center py-4">
                  <Image
                    src={blog.authorImage}
                    alt="author avatar"
                    width={35}
                    height={35}
                    className="rounded-full"
                  />
                  <p>{blog.author}</p>
                </div>
                <div className="flex justify-between w-44 text-sm">
                  <button className="w-20 h-8 rounded-full border border-black font-semibold bg-white text-black">
                    {blog.tag[0]}
                  </button>
                  <button className="w-20 h-8 rounded-full border border-black font-semibold bg-white text-black">
                    {blog.tag[1]}
                  </button>
                </div>
              </figcaption>
            </article>

            <article className="container mx-auto py-0">
              <figure>
                <Image
                  src={Header}
                  alt="artcle cover image"
                  width={1000}
                  height={400}
                  className="object-cover"
                />
              </figure>
              <div className="flex justify-between py-10">
                <figcaption className="w-10/12 text-justify">
                  <p>{blog.introduction}</p>
                </figcaption>
                <div className="flex flex-col h-52 justify-between items-center cursor-pointer">
                  <figure className="border border-black h-9 w-9 flex justify-center items-center">
                    <Image
                      src="/blog/facebook.svg"
                      alt="facebook"
                      width={16}
                      height={16}
                    />
                  </figure>
                  <figure className="border border-black h-9 w-9 flex justify-center items-center">
                    <Image
                      src="/blog/twitter.svg"
                      alt="twitter"
                      width={16}
                      height={16}
                    />
                  </figure>
                  <figure className="border border-black h-9 w-9 flex justify-center items-center">
                    <Image
                      src="/blog/linkedin.svg"
                      alt="linkedin"
                      width={16}
                      height={16}
                    />
                  </figure>
                  <figure className="border border-black h-9 w-9 flex justify-center items-center">
                    <Image
                      src="/blog/copy.svg"
                      alt="copy"
                      width={16}
                      height={16}
                    />
                  </figure>
                </div>
              </div>
              <hgroup>
                <h1 className="text-sm lg:text-3xl font-semibold ">
                  {blog.headingOne}
                </h1>
              </hgroup>
            </article>
          </>
        ))}
      )
      <BlogNewsletter />
    </>
  );
};
export default BlogPage;
