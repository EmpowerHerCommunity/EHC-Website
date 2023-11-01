import NavBar from "../NavBar";
import Footer from "../Footer";
import BlogCard from "../Blog/Card";
import BlogNewsletter from "../Blog/Newsletter";
import Featured from "../Blog/Featured";

const Post = ({ blogs, isFetching, currentPage, totalPages, raw}) => {
  return (
    <>
    <section className="">
      <NavBar />
      <Featured/>
      <BlogCard blogs = {blogs} isFetching={isFetching}  currentPage={currentPage} totalPages={totalPages} raw={raw} />
      <BlogNewsletter />
    </section>
    <Footer />

    </>

  );
};

export default Post;
