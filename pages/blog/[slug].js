import fs from "fs";
import path from "path";
import matter from "gray-matter";
import md from "markdown-it"
import Navbar from "../../src/components/NavBar";
import Image from "next/image";
import BlogNewsletter from "../../src/components/Blog/BlogNewsletter";
import BlogCard from "../../src/components/Blog/BlogCard";


export default function SlugPage({
  data: {
    title,
    date,
    read,
    header,
    introduction,
    description,
    authorImage,
    author,
    tagOne,
    tagTwo,
  },
  slug,
  content,
}) {
  
  function calculateReadingTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content?.trim().split(/\s+/).length;
    const readingTimeInMinutes = wordCount / wordsPerMinute;
    const minutes = Math.floor(readingTimeInMinutes);
    const seconds = Math.floor((readingTimeInMinutes - minutes) * 60);
    const readingTime = minutes + (seconds > 30 ? 1 : 0); // round up if more than 30 seconds
    return readingTime;
  }
  const readTime = calculateReadingTime(content); // call the function and store the result in a variable

  
  return (
    <section className="container mx-auto font-fontFamily" >
      <Navbar />
      <section>
        <article className="pt-3">
          <figcaption className="lg:w-12/12 w-12/12 flex flex-col h-96 px-10 justify-center lg:pl-32 text-black">
            <hgroup className="flex justify-between w-56 items-center text-sm text-slug">
              <h4>{date}</h4>
              <div className="h-2 w-2 bg-black rounded-full border"></div>
              <h4>{readTime > 1 ? `${readTime} minutes read` : `${readTime} minute read`}</h4>
            </hgroup>
            <hgroup className="lg:w-8/12">
              <h1 className="text-sm lg:text-3xl py-4 font-semibold">{title}</h1>
              <p className="text-sm lg:text-base">{description}</p>
            </hgroup>
            <div className=" flex justify-between w-40  items-center py-4">
              <img
                src={authorImage}
                alt="author avatar"
                className="rounded-full w-9 h-9"
              />
              <p className="font-semibold text-sm text-slug">{author}</p>
            </div>
            <div className="flex justify-between w-52 text-sm">
              <button className="w-24 h-8 rounded-full border border-black font-semibold bg-white text-black">
                {tagOne}
              </button>
              <button className="w-24 h-8 rounded-full border border-black font-semibold bg-white text-black">
                {tagTwo}
              </button>
            </div>
          </figcaption>

          <figure className="px-8">
              <img
                src={header}
                alt="artcle cover image"
                className="object-cover w-full rounded-md h-96"
              />
          </figure>
          <div className="flex justify-between pt-14 lg:pl-32 w-12/12">

                <figcaption className="w-10/12 text-justify">
                  <p>{introduction}</p>
                </figcaption>

                <div className=" w-1/12 flex flex-col h-52 justify-between items-center cursor-pointer">
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

              <div className="content pb-10 w-10/12 lg:pl-32 ">
                <div dangerouslySetInnerHTML={{__html: md().render(content)}} className="prose lg:prose-md max-w-screen-lg"/>
              </div>
        </article>
      </section>
      <>
      <BlogNewsletter />
       {/* <BlogCard/> */}
      </>
    </section>
  );
}

export async function getStaticPaths() {
  //retrieve slugs by getting our post  
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  //getting specific blog of the slug
  const markDown = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");
  //destructuring the object markDown
  const { data, content } = matter(markDown);
  return {
    props: {
      data,
      slug,
      content,
    },
  };
}
