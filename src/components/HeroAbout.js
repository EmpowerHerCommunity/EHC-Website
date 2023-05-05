import React, { useEffect } from "react";
import AOS from "aos";

const HeroAbout = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-primary bg-opacity-10 text-justify" id="about">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-2 py-4 md:py-16 md:px-24">
          <div
            className=" hero-about-list text-dark font-normal md:text-lg text-3xl  leading-7"
            data-aos="fade-right"
          >
            <img src="/contact-dots.svg" alt="dots" />
            <ul className="ml-20 mt-8 text-2xl lg:text-2xl cursor-pointer">
              <li className="font-semibold my-1"> <a href="#about">About Us.</a> </li>
              <li className="font-semibold my-1"><a href="#vision"> Our Vision.</a> </li>
              <li className="font-semibold my-1"> <a href="#mission">Our Mission.</a> </li>
              <li className="font-semibold my-1"> <a href="#team"> The Team.</a> </li>
            </ul>
          </div>
          <div>
            <h2 className="md:text-5xl text-4xl font-bold text-center my-10 w-fit  relative">
              About Us
              <span>
                <img src="/line2.png" alt="line" />
              </span>
            </h2>
            <p
              className="font-normal md:text-xl leading-9 text-2xl mb-4 md:leading-8"
              data-aos="fade-left"
            >
              <span className="text-primary text-opacity-60">
                Empower Her Community
              </span>{" "}
             is a female oriented tech community of 5,000+ women dedicated to fostering
              gender diversity in tech. We strive to make the industry more
              accessible by providing training, mentorship, and raising
              awareness of opportunities for women in tech.
            </p>
            <p
              className="font-normal md:text-xl leading-9 text-2xl mb-4 md:leading-8"
              data-aos="fade-left"
            >
              Since its founding in May 2021, our community has kickstarted the career of over
              3,000 women and mentored over 1,000 others. We have also
              connected many members to employment opportunities through
              internships and referrals, with some landing positions at top
              companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroAbout;
