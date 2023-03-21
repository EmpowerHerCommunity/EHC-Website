import NavBar from "../NavBar";
import Footer from "../Footer";
import BlogCard from "../Blog/BlogCard";
import BlogNewsletter from "../Blog/BlogNewsletter";
import FeaturedBlog from "../Blog/FeaturedBlog";

const post = ({ blogs }) => {
  return (
    <>
      <NavBar />
      <FeaturedBlog blogs = {blogs}/>
      <BlogCard blogs = {blogs}/>
      <BlogNewsletter />
      <Footer />
    </>
  );
};

export default post;
