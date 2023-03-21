// import fs from "fs";
// import path from "path";
import matter from "gray-matter";
import { useEffect, useState } from "react";
import Post from "../../src/components/Post.js/Post";
import { sortByDate } from "../../utils/index";

export default function Blog({ posts }) {
  const [blogs, setBlogs] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const URL = "https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/";

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setBlogs(data.results);
        setIsFetching(false);
      } catch (error) {
        setError(error);
        console.log("Failed to fetch events data: ", error);
      }
    }
    if (isFetching) {
      fetchBlogs();
    }
  }, [isFetching]);

  console.log(blogs);

  return (
    <section className="overflow-hidden">
      <Post blogs={blogs} />
    </section>
  );
}
// export async function getStaticProps() {
//   //get files from the post directory
//   const files = fs.readdirSync(path.join("posts"));
//   const posts = files.map((fileName) => {
//     //create slug
//     const slug = fileName.replace(".md", "");
//     //get post
//     const markDownaPosts = fs.readFileSync(path.join("posts", fileName), "utf-8");
//     const { data } = matter(markDownaPosts);
//      return {
//       slug,
//       data,
//      }
//   }
//     );

//   return {
//     props: {
//       posts: posts.sort(sortByDate),
//     },
//   };
// }
