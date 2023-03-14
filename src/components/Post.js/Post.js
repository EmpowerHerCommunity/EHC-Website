import NavBar from "../NavBar";
import Footer from "../Footer";
import BlogCard from "../BlogCard";
import BlogNewsletter from "../BlogNewsletter";
import FeaturedBlog from "../FeaturedBlog";

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
