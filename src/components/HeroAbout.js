import React, { useEffect } from "react";
import AOS from "aos";

const HeroAbout = () => {
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
            <ul className="ml-20 mt-8 lg:text-lg text-base">
              <li className="font-semibold my-1"> About Us. </li>
              <li className="font-semibold my-1"> Our Vision. </li>
              <li className="font-semibold my-1"> Our Mission. </li>
              <li className="font-semibold my-1"> The Team. </li>
            </ul>
          </div>
          <div>
            <h2 className="md:text-5xl text-4xl font-bold text-center my-10 w-fit  relative">
              About Us
              <span>
                <img src="/line2.png" alt="" />
              </span>
            </h2>
            <p
              className="font-normal md:text-lg text-xl mb-4 md:leading-7"
              data-aos="fade-left"
            >

              {/* is a female oriented tech community which focuses on training and
              promoting women in the field of information technology. We aim to
              promote and spread more awareness for opportunities in information
              technology and incorporate as many women as possible. Having
              started our journey in May 2019, we have not backed down in
              helping women transition smoothly into the Information Technology
              industry. We have kickstarted the tech careers of more than 1,500
              women all across the globe. Our aim is to train 10,000 women by
              the end of 2025. */}
              The
              <span className="text-primary text-opacity-60">
                 {" "} Empower Her Community
              </span> is a female-focused tech community of
              over 2,000 women that is dedicated to the inclusion of women
              across all tech roles in the global tech ecosystem. We aim to make
              the tech industry accessible to every willing woman through
              training, mentorships and promoting awareness for opportunities in
              tech. 
            </p>
            <p
              className="font-normal md:text-lg text-xl mb-4 md:leading-7"
              data-aos="fade-left"
            >Founded in May, 2021, the community has successfully
              completed the training of over 120 women and kickstarted the
              learning process of over 500 women, successfully connected
              members of the community to employment opportunities through
              internships and referrals and continue to provide learning support
              to aid their career growth.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroAbout;
