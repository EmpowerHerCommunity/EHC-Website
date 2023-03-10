const blogs = [
  {
    date: "4 March 2023",
    read: "5 Minutes Read",
    image: "/blog-card.jpg",
    title: "Why CSS units matter to your responsive website designs",
    description:
      "Let's discuss using CSS units to create fully responsive websites that size and resize elements. Plus, how to decide on the best units for each situation.",
    author: "Aniekwe Jessica",
    tag: ["CSS", "React"],
  },
];

const BlogCard = () => {
  return (
    <>
      <section>
        <section className="container px-5 py-16 mx-auto">
          {blogs &&
            blogs.map((blog) => (
              <article className="xl:w-1/2 md:w-1/2 p-4">
                <div className="border-2 border-black px-3 py-2 rounded-lg">
                  <img
                    className="h-64 rounded-lg w-full object-cover object-center mb-6"
                    src={blog.image}
                    alt="content"
                  />
                  <section className="flex">
                    <h2 className="text-xs font-medium mb-1">{blog.date}</h2>
                    <h2 className="mb-1 ml-2 text-xs">{blog.read}</h2>
                  </section>
                  <h1 className="lg:text-2xl text-xl font-bold mt-1 mb-2">
                    {blog.title}
                  </h1>
                  <p className="text-base leading-relaxed">
                    {blog.description}
                  </p>
                  <section className="flex items-center flex-wrap mt-3">
                    <img
                      src="/blog-card.jpg"
                      className="w-8 h-8 rounded-full"
                      alt="writer"
                    />
                    <p className="font-medium ml-2 md:mb-1 lg:mb-0">
                      {blog.author}
                    </p>
                  </section>
                  <aside className="flex items-center flex-wrap mb-2 mt-4">
                    <button className="rounded-2xl border-2 border-black py-1 px-4">
                      {blog.tag[0]}
                    </button>
                    <button className="rounded-2xl border-2 border-black py-1 px-4 ml-2">
                      {blog.tag[1]}
                    </button>
                  </aside>
                </div>
              </article>
            ))}
        </section>
      </section>
    </>
  );
};

export default BlogCard;
