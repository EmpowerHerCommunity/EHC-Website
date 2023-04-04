import {useEffect} from 'react'
import Link from "next/link";
import AOS from "aos";

const BlogNewsletter = () => {

  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <div className="flex justify-center items-center my-12">
      <div className="m-auto p-7 bg-white lg:border-2 border-gray-900 rounded-lg lg:shadow-lg w-8/12">
        <p className="text-center text-3xl lg:text-4xl font-medium" data-aos="fade-left">Join our Newsletter</p>
        <h3 className="text-center mt-2 p-3 text-4xl font-semibold" data-aos="fade-right">
          Get Community Updates and Opportunities.
        </h3>
        <div className="flex items-center justify-center pt-5">
          {/* <div className=" w-10/12 lg:flex lg:flex-row lg:items-center lg:relative lg:p-4"> */}
            {/* <input
              type="text"
              className=" text-center w-full py-4 pl-3 pr-4 placeholder:text-2xl border-2 border-primary rounded-full focus:outline-none focus:ring-primary focus:border-primary sm:text-sm lg:w-11/12 lg:pr-30 lg:h-12"
              placeholder="What's your email address"
            /> */}
            <div className="flex items-center justify-center pt-4" >
              <button
                type="submit"
                className="hover:scale-105 animate-bounce cursor-pointer flex items-center lg:text-2xl text-3xl px-16 border border-transparent rounded-full shadow-sm font-medium text-white  bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary lg:py-2 lg:h-16 h-16"
              >
                <Link href="https://empowerhercommunity.substack.com/embed">
                  <a target="_blank"> Subscribe</a>
                </Link>
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};
export default BlogNewsletter;
