import search from "../../../public/blog/searchicon.png";
import Image from "next/image";
const FeaturedBlog = () => {
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
    },
  ];

  return (
    <header className="container mx-auto mt-14 cursor-pointer">
      <nav className="lg:flex md:flex md:justify-between md:items-center lg:justify-between lg:items-center text-sm font-semibold mx-10">
        <div className="lg:block md:block hidden">
          <button className="w-28 h-10 rounded-full border border-black font-semibold bg-blogBtn">
            ALL TOPICS
          </button>
        </div>

        <div className="lg:w-5/12 md:w-6/12 lg:block md:block hidden">
        <ul className="flex justify-between items-center lg:w-11/12">
            <li>REACT</li>
            <li>CSS</li>
            <li>PRODUCT</li>
            <li>DESIGN</li>
            <li>LIFESTYLE</li>
          </ul>
        </div>

        <div className="relative mt-5">
          <input
            placeholder="Search"
            className="border rounded-full h-10 px-3 placeholder:left-7 placeholder:relative text-sm lg:w-80  w-full"
          />
          <figure className="relative bottom-7 left-5">
            <Image src={search} width={14} height={14} />
          </figure>
        </div>
      </nav>

      {/* {blogs &&
        blogs.map((blog) => (
          <article className=" container mx-6">
            <figure className=" relative container h-96 border-8">
              <img src={blog.blogImage}  />
            </figure>
            <figcaption className="lg:w-9/12 w-12/12 relative bottom-80 flex flex-col  px-20 border-8  justify-center text-blogBtn" >
              <hgroup className="flex justify-between w-96 items-center text-sm">
                <h4> Featured Article </h4>
                <div className="h-2 w-2 bg-blogBtn rounded-full border"></div>
                <h4>{blog.date}</h4>
                <div className="h-2 w-2 bg-blogBtn rounded-full border"></div>
                <h4>{blog.read}</h4>
              </hgroup>
              <hgroup>
                <h1 className="text-sm lg:text-5xl py-4">{blog.title}</h1>
                <p className="text-sm lg:text-lg">{blog.description}</p>
              </hgroup>
              <div className=" flex justify-between w-40 items-center py-4">
                <Image src={blog.authorImage} alt="author avatar" width={35} height={35} className="rounded-full" />
                <p>{blog.author}</p>
              </div>
              <div className="flex justify-between w-44 text-sm">
                <button className="w-20 h-8 rounded-full border border-black font-semibold bg-blogBtn text-black">{blog.tag[0]}</button>
                <button className="w-20 h-8 rounded-full border border-black font-semibold bg-blogBtn text-black">{blog.tag[1]}</button>
              </div>
            </figcaption>
          </article>
        ))} */}
    </header>
  );
};

export default FeaturedBlog;
