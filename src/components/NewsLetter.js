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
        <div className="flex justify-between items-center flex-row text-dark">
          <h2
            className="md:text-2xl sm:text-5xl lg:text-4xl  text-5xl max-w-3xl lg:w-1/2 lg:flex-auto mb-1"
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
                <button className="bg-primary text-white w-96 h-14 rounded-md flex-auto text-2xl hover:bg-transparent hover:shadow-md hover:text-primary">
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
