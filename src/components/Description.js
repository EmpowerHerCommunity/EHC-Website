import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";

const Description = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <section className="py-12 text-justify  lg:px-0 px-3">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        <div className="">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
            <div data-aos="fade-down">
              <div className="relative px-10 py-14 z-5">
                <div className="absolute top-0 left-0">
                  <Image
                    src="/hero-about-up.png"
                    alt="dot"
                    width={130}
                    height={130}
                  />
                </div>
                <div className="absolute bottom-0 lg:right-0 md:right-40 right-0">
                  <Image
                    src="/hero-about-down.png"
                    alt="dot"
                    width={130}
                    height={130}
                  />
                </div>
                <Image
                  src="/volunteers.JPEG"
                  alt="women"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div>
              <div
                className="relative mb-8 max-w-max lg:pt-20"
                data-aos="fade-right"
              >
                <h2 className="hero-h2 text-dark md:text-5xl text-4xl font-bold max-w-max">
                  Who Are We?
                </h2>
                <hr className="border-0 h-1 w-3/5 absolute bottom-0 left-0 bg-yellow" />
              </div>
              <p
                className="hero-paragraph font-normal md:text-xl text-2xl text-dark md:leading-7 leading-8 mb-4"
                data-aos="fade-up"
              >
                Empower Her Community is a tech-based community focused on
                training and promoting women in the field of information
                technology for free. We aim to spread awareness for
                opportunities in information technology and incorporate as many
                women as possible.
              </p>
              <div className="leading-6 mt-2 mb-12">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdiqxcF-QKi9bf97M6XaNUEmr1dc-5wOLpeAJqNWaCtRjTb5A/viewform"
                  legacyBehavior
                >
                  <a target="_blank">
                    <button className='rounded-md bg-primary py-3 px-4 border text-white border-primary hover:border-transparent w-44  hover:text-primary hover:bg-transparent hover:border-opacity-5 hover:shadow hover:border-primary'>
                      <span className=" text-2xl "> Join Us Today </span>
                    </button>
                  </a>
                </Link>
              </div>
              <div
                className="flex items-end lg:gap-20 gap-20"
                data-aos="fade-up-right"
              >
                <div>
                  <Image
                    src="/1.png"
                    alt="training icon"
                    width={36}
                    height={36}
                  />
                  <p className="text-4xl md:text-4xl text-primary font-semibold leading-5 mt-6">
                    3000+ <br />
                    <span className="text-xl md:text-xl text-dark font-normal">
                      Trained
                    </span>
                  </p>
                </div>
                <div>
                  <Image
                    src="/2.png"
                    alt="mentoring icon"
                    width={50}
                    height={44}
                  />
                  <p className="text-4xl md:text-4xl text-primary font-semibold leading-5 mt-6">
                    1000+ <br />
                    <span className="text-xl md:text-xl text-dark font-normal">
                      Mentored
                    </span>
                  </p>
                </div>
                <div>
                  <Image
                    src="/3.png"
                    alt="members icon"
                    width={36}
                    height={36}
                  />
                  <p className="text-4xl md:text-4xl text-primary font-semibold leading-5 mt-6">
                    5000+ <br />
                    <span className="text-xl md:text-xl text-dark font-normal">
                      {" "}
                      Members
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
