import React, { useEffect } from "react";
import AOS from "aos";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="">
        <div className="container mx-auto  lg:px-24 px-5 flex-col items-center">
			<section className="flex lg:flex-row  md:flex-row flex-col justify-center items-center lg:mt-32 mt-16">
          <div className="relative w-5/12 md:w-6/12 lg:h-96 md:h-52 h-44 border-black">
            <figure
              className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
              data-aos="fade-up"
            >
              <Image
                src="/hero-volunteer.png"
                className="object-cover object-center"
                width="260px"
                height="260px"
                alt="cup"   
              />
            </figure>

            <div className="absolute lg:block hidden">
              <figure className="relative bottom-72 left-52">
                <Image
                  src="/volunteers/right8.svg"
                  alt="line"
                  width={120}
                  height={120}
                />
              </figure>

              <figure className="relative bottom-56 left-52">
                <Image
                  src="/volunteers/right9.svg"
                  alt="line"
                  width={120}
                  height={120}
                />
              </figure>
            </div>
            <div className=" absolute lg:block hidden">
              <figure className="relative bottom-72 right-6">
                <Image
                  src="/volunteers/left10.svg"
                  alt="line"
                  width={120}
                  height={120}
                />
              </figure>
              <figure className="relative bottom-56 right-6">
                <Image
                  src="/volunteers/left11.svg"
                  alt="line"
                  width={120}
                  height={120}
                />
              </figure>
            </div>
          </div>

          <div
            className="lg:flex-grow md:w-5/2 lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left text-left py-10 pb-16"
            data-aos="fade-left"
          >
            <h1 className="sm:text-4xl text-3xl mb-4 font-semibold">
              You can volunteer to work with us
            </h1>
            <p className="mb-3 font-medium">All it takes is:</p>
            <ul className="list-disc ml-3">
              <li className="mt-1">Being motivated.</li>
              <li className="mt-2">Having an interest for women in tech.</li>
              <li className="mt-2">
                Having good organizational and managerial skills.
              </li>
              <li className="mt-2">Having experience in a related field.</li>
            </ul>
          </div>
		  </section>
        </div>
      </section>
    </>
  );
};

export default Hero;
