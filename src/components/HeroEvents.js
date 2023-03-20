import React, { useEffect } from "react";
import AOS from "aos";

const HeroEvents = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-primary bg-opacity-10 text-justify">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-2 py-4 md:py-16 md:px-24">
          <div
            className=" hero-about-list text-dark font-normal md:text-lg text-3xl  leading-7"
            data-aos="fade-right"
          >
            <img src="/contact-dots.svg" alt="" />
            <ul className="ml-32 text-lg mt-8">
              <li className="font-semibold my-1"> Events. </li>
              <li className="font-semibold my-1"> Bootcamps. </li>
              <li className="font-semibold my-1"> Webinars. </li>
              <li className="font-semibold my-1"> Outreach. </li>
            </ul>
          </div>
          <div>
            <h2 className="md:text-5xl text-4xl font-bold text-center my-10 w-fit  relative">
              Events
              <span>
                <img src="/line2.png" alt="" />
              </span>
            </h2>
            <p
              className="font-normal md:text-lg text-lg mb-4 md:leading-7"
              data-aos="fade-left"
            >
              Since our inception, we have provided a plethora of opportunities
              for women around the globe to benefit from our interactive
              sessions, webinars, and bootcamps. These initiatives have
              empowered countless women, enabling them to gain valuable
              insights, learn new skills, and connect with like-minded
              individuals. Our commitment to creating a supportive community
              where women can thrive remains unwavering, and we will continue to
              innovate and improve our offerings to better serve our women.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroEvents;
