import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../../src/components/Post.js/Post"

export default function Blog({ posts }) {
  console.log(posts);
  return (
    <section className="overflow-hidden">
         <Post posts={posts}/>
    </section>
  );
}

export async function getStaticProps() {
  //get files from the post directory
  const files = fs.readdirSync(path.join("posts"));
//   console.log(files);
  //get slug and the posts
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
console.log(posts)
  });
  return {
    props: {
      posts: posts,
    },
  };
}
