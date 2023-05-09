import React, { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";

const NewsLetter = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-primary bg-opacity-10 p-8">
      <div className="container xl:max-w-screen-xl mx-auto py-10">
        <div className="flex justify-between xl:items-center items-start xl:flex-row flex-col text-dark">
          <h2
            className="md:text-3xl text-2xl lg:text-4xl xl:mb-0 mb-7 font-medium lg:max-w-3xl max-w-lg xl:w-1/2 lg:flex-auto"
            data-aos="fade-right"
          >
            Get community updates and opportunities delivered to your inbox
          </h2>
          <div className="">
            <Link
              href="https://empowerhercommunity.substack.com/embed"
              legacyBehavior
            >
              <a target="_blank">
                <button className="bg-primary text-white md:w-96 w-48 h-14 rounded-md flex-auto text-2xl hover:bg-transparent hover:shadow-md hover:text-primary">
                  Yes, I’m in!
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
