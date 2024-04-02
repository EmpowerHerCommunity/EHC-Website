import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";

const Events = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-primary bg-opacity-10 text-black py-20 ">
      <div className="container xl:max-w-screen-xl mx-auto px-4 relative">
        <div className="absolute top-[0px] left-[5px] sm:left-[-15px] ml-4">
          <Image src="/group2.png" width={135} height={135} />
        </div>
        <div className="lg:pl-11 pl-0 lg:pt-7 pt-20">
          <div className="relative mb-8 max-w-max mx-auto">
            <h2 className="md:text-5xl text-4xl text-center font-bold">
              Events
            </h2>
            <hr className="border-0 h-1 w-4/5 absolute bottom-0 left-0 bg-yellow" />
          </div>
          <div className="lg:grid-cols-3 place-items-center grid md:grid-cols-2 grid-col-1  justify-between w-12/12 ">
            <div
              data-aos="fade-up"
              className="mb-8 text-center flex items-center flex-col  md:text-left w-11/12"
            >
              <div data-aos="fade-down">
                <div className="h-[300px]">
                  <img
                    src="/2.0.jpg"
                    className="w-72 h-72 rounded-md"
                    alt="Bootcamp 2.0"
                  />
                </div>
              </div>
              <h2 className="lg:text-3xl text-4xl leading-10 mb-2 mt-4 font-medium">
                Bootcamp 2.0
              </h2>
              <p className="font-normal md:text-lg text-2xl text-center tracking-wider lg:text-justify w-12/12 lg:w-9/12 h-40">
                The initiative offered training in a range of skills, including
                Data Science...
                <br />
                <Link
                  href="/events#Bootcamp 2.0"
                  className="read-more font-normal text-xl lg:text-lg leading-6 flex  justify-center md:justify-end mt-6 text-primary"
                >
                  READ MORE...
                </Link>
              </p>
            </div>

            <div
              data-aos="fade-up"
              className="mb-8 text-center flex items-center flex-col md:text-left  w-11/12"
            >
              <div data-aos="fade-down">
                <div className="h-[300px]">
                  <img
                    src="/mentorship.jpg"
                    className="w-72 h-72 rounded-md"
                    alt="mentorship flyer"
                  />
                </div>
              </div>
              <h2 className="lg:text-3xl text-4xl leading-10 mb-2 mt-4 font-medium">
                Mentorship Academy
              </h2>
              <p className="font-normal md:text-lg text-2xl text-center tracking-wider lg:text-justify w-12/12 lg:w-9/12 h-40">
                The Mentorship Academy is designed to connect women with
                seasoned experts....
                <br />
                <Link
                  href="/events#Mentorship Academy"
                  className="read-more font-normal text-xl lg:text-lg leading-6 flex  justify-center md:justify-end mt-6 text-primary"
                >
                  READ MORE...
                </Link>
              </p>
            </div>
            <div
              data-aos="fade-up"
              className=" text-center flex items-center flex-col md:text-left  w-11/12"
            >
              <div data-aos="fade-down">
                <div className="h-[300px] overflow-hidden lg:-mt-5 md:-mt-0">
                  <img
                    src="/events3.jpeg"
                    className="w-72 h-72 rounded-md"
                    alt="volunteer"
                  />
                </div>
              </div>
              <h2 className="lg:text-3xl text-center text-4xl leading-10 mb-2 mt-4 font-medium">
                Non Technical Bootcamp
              </h2>
              <p className="font-normal md:text-lg text-2xl text-center tracking-wider lg:text-justify w-12/12 lg:w-9/12 h-40">
                Empower Her Community in partnership with Non Tech In Tech
                organized...
                <br />
                <Link
                  href="/events#Non Technical Bootcamp"
                  className="read-more font-normal lg:text-lg text-xl leading-6 flex justify-center md:justify-end mt-6 text-primary"
                >
                  READ MORE...
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
