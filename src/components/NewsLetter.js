import React, { useEffect, useState } from "react";
import AOS from "aos";
import Link from "next/link";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  
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
            <p className="text-2xl md:text-2xl" data-aos="fade-right">
              Subscribe to our news letter to receive updates
            </p>
            {email}
            <form
              className="flex mt-2"
              data-aos="fade-left"
            >
              {/* <input
                type="email"
                name=""
                className="placeholder:text-2xl w-2/3 flex-auto py-3 px-4"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              /> */}
              <button
                type="submit"
                className={
                  (isLoading ? "cursor-progress " : "") +
                  "bg-primary text-white w-1/3 flex-auto text-2xl h-12 rounded-md"
                }
                disabled={isLoading}
              >
                <Link href="https://empowerhercommunity.substack.com/embed">
                  <a>Subscribe</a>
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
