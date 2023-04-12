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
        <div className="pl-11 lg:pt-7 pt-20">
          <div className="relative mb-8 max-w-max mx-auto">
            <h2 className="font-normal md:text-5xl text-4xl text-center font-bold">
              Events
            </h2>
            <hr className="border-0 h-1 w-4/5 absolute bottom-0 left-0 bg-yellow" />
          </div>
          <div className="lg:flex xl:flex-row grid md:grid-cols-2 grid-col-1  justify-between w-12/12 ">
            <div
              data-aos="fade-up"
              className="mb-8 text-center md:text-left lg:w-4/12 w-11/12"
            >
              <div data-aos="fade-down">
                <Image src="/webinar4.jpg" width={300} height={300} className="rounded-md" />
              </div>
              <h2 className="lg:text-3xl text-4xl leading-10 mb-2 mt-4 font-medium">
                Webinar
              </h2>
              <p className=" font-normal md:text-lg text-2xl tracking-wider text-justify lg:w-9/12 w-12/12 h-40">
                An interactive session aimed at addressing the disinterest and
                discouragement that girls often experience in the field of IT.
                <br />
                <Link href="/aboutUs" className="read-more font-normal text-lg  leading-6 md:flex justify-end mt-6 text-primary">
                      READ MORE...
                </Link>
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="mb-8 text-center md:text-left lg:w-4/12 w-11/12"
            >
              <div data-aos="fade-down">
                <Image src="/volunteers.JPEG" width={300} alt="volunteer" height={300} className="rounded-md" />
              </div>
              <h2 className="lg:text-3xl text-4xl leading-10 mb-2 mt-4 font-medium">
                Bootcamp 1.0
              </h2>
              <p className="font-normal md:text-lg text-2xl tracking-wider text-justify lg:w-9/12 w-12/12 ">
                Empower Her Community Bootcamp was a game-changing initiative
                that provided women with a month-long, free-of-charge training
                program.
                <br />
                <Link href="/aboutUs" className="read-more font-normal text-lg  leading-6 md:flex justify-end mt-6 text-primary">
                      READ MORE...
                </Link>
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="mb-8 text-center md:text-left lg:w-4/12 w-11/12"
            >
              <div data-aos="fade-down">
                <Image src="/mentorship.jpg" alt="mentorship flyer" width={300} height={300} className="rounded-md" />
              </div>
              <h2 className="lg:text-3xl text-4xl leading-10 mb-2 mt-4 font-medium">
                Mentorship Academy
              </h2>
              <p className="font-normal md:text-lg text-2xl tracking-wider text-justify w-12/12 lg:w-9/12 h-40">
                The Mentorship Academy is designed to connect women who are just
                starting out in their careers with seasoned experts.
                <br/>
                <Link href="/aboutUs" className="read-more font-normal text-lg  leading-6 md:flex justify-end mt-6 text-primary">
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
