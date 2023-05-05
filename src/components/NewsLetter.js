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
        <div className="flex flex-wrap gap-6 text-dark">
          <h2
            className="md:text-4xl sm:text-5xl lg:text-6xl text-5xl w-full lg:w-1/2 lg:flex-auto mb-1"
            data-aos="fade-right"
          >
            Join our NewsLetter
          </h2>
          <div className="w-full lg:w-5/12 lg:flex-auto">
            <Link
              href="https://empowerhercommunity.substack.com/embed"
              legacyBehavior
            >
              <a target="_blank">
                <button className="bg-primary text-white w-96 h-14 rounded-md flex-auto text-2xl hover:scale-105">
                  Subscribe
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
