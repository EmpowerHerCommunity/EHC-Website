import NavBar from "../NavBar";
import Footer from "../Footer";
import BlogCard from "../Blog/BlogCard";
import BlogNewsletter from "../Blog/BlogNewsletter";
import FeaturedBlog from "../Blog/FeaturedBlog";

const post = ({ posts }) => {
  return (
    <>
      <NavBar />
      <FeaturedBlog posts = {posts}/>
      <BlogCard posts = {posts}/>
      <BlogNewsletter />
      <Footer />
    </>
  );
};

export default post;
