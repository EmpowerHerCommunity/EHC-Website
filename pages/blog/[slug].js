import fs from "fs";
import path from "path";
import matter from "gray-matter";
import md from "markdown-it"
import Navbar from "../../src/components/NavBar";
import Image from "next/image";
import BlogNewsletter from "../../src/components/Blog/BlogNewsletter";

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
    <section className="border-8" >
      <Navbar />
      <section >
        <article className="lg:pl-40">
          <figcaption className="lg:w-9/12 w-12/12 flex flex-col h-feature px-10 justify-center text-black">
            <hgroup className="flex justify-between w-56 items-center text-sm">
              <h4>{date}</h4>
              <div className="h-2 w-2 bg-black rounded-full border"></div>
              <h4>{readTime > 1 ? `${readTime} minutes read` : `${readTime} minute read`}</h4>
            </hgroup>
            <hgroup>
              <h1 className="text-sm lg:text-5xl py-4">{title}</h1>
              <p className="text-sm lg:text-lg">{description}</p>
            </hgroup>
            <div className=" flex justify-between w-40 items-center py-4">
              <Image
                src={authorImage}
                alt="author avatar"
                width={35}
                height={35}
                className="rounded-full"
              />
              <p>{author}</p>
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
          <figure>
              <Image
                src={header}
                alt="artcle cover image"
                width={1000}
                height={400}
                className="object-cover"
              />
          </figure>
          <div className="flex justify-between pt-6 ">
                <figcaption className="w-10/12 text-justify">
                  <p>{introduction}</p>
                </figcaption>
                <div className=" w-2/12 flex flex-col h-52 justify-between items-center cursor-pointer">
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
              <div className="content pb-10 w-11/12 ">
                <div dangerouslySetInnerHTML={{__html: md().render(content)}} className="prose lg:prose-md max-w-screen-lg"/>
              </div>
        </article>
      </section>
      <BlogNewsletter />
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
