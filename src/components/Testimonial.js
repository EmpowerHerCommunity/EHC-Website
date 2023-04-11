import React, { useState } from "react";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import styles from "../../styles/Home.module.css";

const Testimonial = () => {
  const allTestimonials = [
    {
      id: 1,
      image: "/testimonial1.png",
      name: "Falomo Sharon",
      role: "Frontend developer",
      testimonial:
        "I participated in Bootcamp 2.0 front-end web development and it was amazing, I really enjoyed my time in the Bootcamp. Especially meeting our facilitators and the assignments too. I started this Bootcamp not being able to make a responsive websites and now I make websites responsive at ease.",
    },
    {
      id: 2,
      image: "/Nancy.png",
      name: "Nancy Olatuja",
      role: "Frontend developer",
      testimonial:"The bootcamp was an unforgettable experience as a frontend newbie. Despite having no prior knowledge, I learned to create user-friendly websites and communicate ideas. The facilitators were always available to help with any challenges and I'm grateful to be a part of this supportive community."    },


    {
      id: 3,
      image: "/sam.png",
      name: "Olamide Sanusi ",
      role: "Data analyst",
      testimonial:
        "The technical bootcamp 3.0 has been an incredible experience. As someone new to data analysis, I found it difficult at first, but thanks to the facilitator, the learning process has been enjoyable. She even makes herself available outside of class hours to answer questions and provide guidance as needed.",
    },
    {
      id: 4,
      image: "/Jessica.png",
      name: "Jessica Joseph",
      role: "Frontend developer",
      height: "400px",
      testimonial:
        "The program was intense and challenging, but also incredibly rewarding. I had the opportunity to learn from some of the best instructors in the industry, who were not only knowledgeable but very supportive. I also found a tech family, EHC is such an amazing community for women in technology.",
    },

    // {
    //   id: 5,
    //   image: "/jennifer.png",
    //   name: "Jennifer Njoku",
    //   role: "Cyber Security Specialist",
    //   height: "400px",
    //   testimonial:
    //     "My experience at Bootcamp 3.0 has been truly exceptional. With the help of my facilitators, I was able to publish my first article on cybersecurity on Medium, which was a thrilling experience. In addition, I was introduced to the Cisco packet tracer, which I am currently mastering for my networking practical.",
    // },
  ];
  const [prevIndex, setPrevIndex] = useState(2);
  const [nextIndex, setNextIndex] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevFunc = () => {
    setPrevIndex(prevIndex <= 0 ? allTestimonials.length - 1 : prevIndex - 1);
    setNextIndex(nextIndex <= 0 ? allTestimonials.length - 1 : nextIndex - 1);
    setCurrentIndex(
      currentIndex <= 0 ? allTestimonials.length - 1 : currentIndex - 1
    );
  };
  const nextFunc = () => {
    setTimeout(() => {
      setPrevIndex(prevIndex >= allTestimonials.length - 1 ? 0 : prevIndex + 1);
      setNextIndex(nextIndex >= allTestimonials.length - 1 ? 0 : nextIndex + 1);
      setCurrentIndex(
        currentIndex >= allTestimonials.length - 1 ? 0 : currentIndex + 1
      );
    }, 100);
  };
  return (
    <section className="py-12 text-justify">
      <div className="container xl:max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="absolute top-[0px] left-[5px] sm:left-[-15px] ml-4">
          <Image src="/group2.png" width={115} height={115} />
        </div>
        <div className="">
          <div className="relative mb-14  max-w-max mx-auto lg:pt-4 pt-36">
            <h2 className="hero-h2 font-normal md:text-5xl text-4xl font-bold max-w-max">
              Testimonials
            </h2>
            <hr className="border-0 h-1 w-3/5 absolute bottom-0 left-0 bg-yellow" />
          </div>
          <div className="">
            <div className="flex gap-4 relative z-10 mt-3">
              <div
                className={`overflow-hidden absolute top-0 bottom-0 left-0 lg:relative z-30 p-2 lg:p-0 min-w-fit flex-none`}
              >
                <div
                  className={`overflow-hidden relative z-10 lg:w-44 h-full flex items-center justify-center`}
                >
                  <div
                    className={`overflow-hidden relative z-10 w-0 lg:w-full h-full flex items-center`}
                  >
                    {allTestimonials.map((testimonial, i) => {
                      return (
                        <div
                          className={`overflow-hidden absolute z-10 w-0 lg:w-full h-full flex items-center justify-center flex-none`}
                          style={{
                            transform: `translateX(${(i - prevIndex) * 100}%)`,
                            transition: "all 0.5s",
                          }}
                          key={`prevTestimonial${i}`}
                        >
                          <div
                            className={`relative z-10 w-0 lg:w-full h-full flex items-center justify-center bg-no-repeat bg-cover bg-center ${styles.navigationCard}`}
                            style={{
                              backgroundImage: `url('${testimonial.image}')`,
                            }}
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    className="rounded-full w-10 h-10 block bg-white mx-4 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 lg:tranform z-20 opacity-30 hover:opacity-80 lg:opacity-100"
                    onClick={prevFunc}
                  >
                    <FaArrowLeft
                      size="1.5rem"
                      className="mx-auto text-primary"
                    />
                  </button>
                </div>
              </div>
              <div className="overlow-hidden relative min-h-[480px] sm:min-h-[360px] xl:min-h-[340px] z-20 flex-auto">
                <div
                  className={`overflow-hidden relative z-10 w-full h-full flex items-center`}
                >
                  {allTestimonials.map((testimonial, i) => {
                    return (
                      <div
                        className={`overflow-hidden absolute z-10 w-full h-full flex items-center justify-center flex-none`}
                        style={{
                          transform: `translateX(${(i - currentIndex) * 100}%)`,
                          transition: "all 0.5s",
                        }}
                        key={`currentTestimonial${i}`}
                      >
                        <div
                          className={
                            " bg-[url('/rectangle.png')] font-normal md:text-lg text-sm leading-6 bg-no-repeat bg-cover bg-right-top w-full h-full"
                          }
                        >
                          <div className="flex items-stretch h-full">
                            <div className="p-5 flex-auto">
                              <p className="text-xl lg:text-xl leading-8">
                                {testimonial.testimonial}
                              </p>
                              <p className="text-2xl font-normal leading-6 mt-5 text-primary">
                                {testimonial.name}
                              </p>
                              <span className="text-base leading-6 font-normal">
                                {testimonial.role}
                              </span>
                            </div>
                            <div className="flex-none flex items-end w-44 sm:w-fit">
                              <Image
                                src={testimonial.image}
                                width={190}
                                height={300}
                                alt="attendee"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className={`overflow-hidden absolute top-0 bottom-0 right-0 lg:relative z-30 p-2 lg:p-0 min-w-fit flex-none`}
              >
                <div
                  className={`overflow-hidden relative z-10 lg:w-44 h-full flex items-center justify-center`}
                >
                  <div
                    className={`overflow-hidden relative z-10 w-0 lg:w-full h-full flex items-center`}
                  >
                    {allTestimonials.map((testimonial, i) => {
                      return (
                        <div
                          className={`overflow-hidden absolute z-10 w-0 lg:w-full h-full flex items-center justify-center flex-none`}
                          style={{
                            transform: `translateX(${(i - nextIndex) * 100}%)`,
                            transition: "all 0.5s",
                          }}
                          key={`Testimonial${i}`}
                        >
                          <div
                            className={`relative z-10 w-0 lg:w-full h-full flex items-center justify-center bg-no-repeat bg-cover bg-center ${styles.navigationCard}`}
                            style={{
                              backgroundImage: `url('${testimonial.image}')`,
                            }}
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    className="rounded-full w-10 h-10 block bg-white mx-4 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 lg:tranform z-20 opacity-30 hover:opacity-80 lg:opacity-100"
                    onClick={nextFunc}
                  >
                    <FaArrowRight
                      size="1.5rem"
                      className="mx-auto text-primary"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
