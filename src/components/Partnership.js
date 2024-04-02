import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

const Partnership = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <section className="" id="partnership">
      <div className="container xl:max-w-screen-xl mx-auto px-4 relative py-20">
        <div className="absolute top-[30px] right-0 ml-4">
          <img src="/purple-dots-down.png" alt="dot" className="w-24 h-24" />
        </div>
        <div className="container mx-auto">
          <div className="relative mb-12 max-w-max mx-auto">
            <h2 className="patnership-title font-bold md:text-5xl text-4xl text-dark text-center">
              In Partnership With
            </h2>
            <hr className="border-0 h-1 w-3/5 absolute bottom-0 left-0 bg-yellow" />
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              <div className=" flex items-center justify-center border-2 border-primary bg-white h-full w-full">
                <img
                  src="/sponsor/GetEquityBlue.png"
                  className="filter grayscale brightness-50 w-48 h-11"
                  alt="get equity"
                  data-aos="fade-up-right"
                />
              </div>

              <div className=" flex items-center justify-center border-2 border-primary bg-black h-64 w-full ">
                <img
                  src="/sponsor/NTIT.png"
                  className="w-14 h-14"
                  alt="NTIT"
                  data-aos="fade-up-right"
                />
              </div>

              <div className=" flex items-center justify-center border-2 border-primary bg-white  h-64 w-full">
                <img
                  src="/sponsor/GetEquityBlue.png"
                  className="filter grayscale brightness-50 w-48 h-11"
                  alt="getequity"
                  data-aos="fade-up-right"
                />
              </div>

              <div className=" flex items-center justify-center border-2 border-primary bg-black  h-64 w-full">
                <img
                  src="/sponsor/NTIT.png"
                  className="w-14 h-14"
                  alt="NTIT"
                  data-aos="fade-up-right"
                />
              </div>

              <div className=" flex items-center justify-center border-2 border-primary bg-white  h-64 w-full">
                <img
                  src="/sponsor/GetEquityBlue.png"
                  className="filter grayscale brightness-50 w-48 h-11"
                  alt="GETEQUITY"
                  data-aos="fade-up-right"
                />
              </div>

              <div className=" flex items-center justify-center border-2 border-primary bg-black  h-64 w-full">
                <img
                  src="/sponsor/GetEquitywhite.png"
                  className="w-48 h-11"
                  alt="get equity"
                  data-aos="fade-up-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
