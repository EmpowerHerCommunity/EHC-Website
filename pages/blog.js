// import "./App.css";
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';
import BlogCard from '../src/components/BlogCard';
import BlogNewsletter from '../src/components/BlogNewsletter';
import FeaturedBlog from '../src/components/featuredBlog';

const App = () => {

    return (
        <div className='overflow-hidden'>
            <NavBar />
            <FeaturedBlog/>
            <BlogCard />
            <BlogNewsletter/>
            <Footer />
        </div>
    );
}

export default App;
