import NavBar from "../NavBar";
import Footer from "../Footer";
import BlogCard from "../Blog/BlogCard";
import BlogNewsletter from "../Blog/BlogNewsletter";
import Featured from "../Blog/Featured";

const post = ({ blogs, isFetching, currentPage, totalPages, raw}) => {
  return (
    <section>
      <NavBar />
      <Featured/>
      <BlogCard blogs = {blogs} isFetching={isFetching}  currentPage={currentPage} totalPages={totalPages} raw={raw} />
      <BlogNewsletter />
      <Footer />
    </section>
  );
};

export default post;
