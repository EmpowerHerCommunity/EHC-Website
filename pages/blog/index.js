import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../../src/components/Post.js/Post"
import { sortByDate } from "../../utils/index";

export default function Blog({ posts }) {
  return (
    <section className="overflow-hidden">
         <Post posts={posts}/>
    </section>
  );
}
export async function getStaticProps() {
  //get files from the post directory
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((fileName) => {
    //create slug
    const slug = fileName.replace(".md", "");
    //get post
    const markDownaPosts = fs.readFileSync(path.join("posts", fileName), "utf-8");
    const { data } = matter(markDownaPosts);
     return {
      slug,
      data,
    }
  }
    );

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

