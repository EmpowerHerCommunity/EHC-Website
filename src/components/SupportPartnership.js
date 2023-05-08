import Image from "next/image";
import React from "react";

function SupportPartnership() {
  return (
    <section className="bg-primary bg-opacity-5 flex flex-col  justify-center h-[382px] xl:items-center">
      <div className="container mx-auto px-10 md:px-10 ">
        <div className="flex xl:flex-row flex-col ">
          <div className="lg:w-4/12">
            <h1
              data-aos="fade-right"
              className="font-bold border-b-4 max-w-[200px] xl:max-w-[290px]  border-yellow text-2xl md:text-2xl xl:text-5xl"
            >
              In Partnership With
            </h1>
          </div>
          <div className=" grid grid-cols-3 xl:pt-0 md:pt-8 pt-4 lg:pt-8 gap-5 lg:max-w-5xl max-w-md lg:gap-20">
            <div className="bg-payment h-[56px] w-[96px] lg:h-[139px] lg:w-[232px] flex items-center justify-center rounded-md">
              <img
                src="/p3.svg"
                alt="getEquity"
                className="w-[66px] h-[20px] lg:h-[40px] lg:w-[150px]"
              />
            </div>
            <div className="bg-payment w-[96px] h-[56px] lg:h-[139px] lg:w-[232px]  flex items-center justify-center rounded-md">
              <img
                src="/p2.svg"
                alt="getEquity"
                className="w-[66px] h-[20px] lg:h-[39px] lg:w-[44px]"
              />
            </div>
            <div className="bg-white w-[96px] h-[56px] lg:h-[139px] lg:w-[232px] border border-slug flex items-center justify-center  rounded-md">
              <img
                src="/p1.svg"
                alt="getEquity"
                className="w-[66px] h-[20px] lg:h-[39px] lg:w-[44px]"
              />
            </div>
          </div>
        </div>
        {/* <div className=" grid lg:grid-cols-3 grid-cols-1  lg:pt-0 pt-5 lg:gap-20">
          <div className="bg-payment lg:h-[139px] lg:w-[232px] flex items-center justify-center rounded-md">
           <Image src="/p3.svg" alt="getEquity" width={150} height={40}/>
          </div>
          <div className="bg-payment lg:h-[139px] lg:w-[232px]  w-[96px] h-[46px] flex items-center justify-center rounded-md">
            <img src="/p2.svg" alt="partners" className="lg:h-[39px] lg:w-[44px] h-[17px] w-[18px]"  />
          </div>
          <div className="bg-white lg:h-[139px] lg:w-[232px]  w-[96px] h-[46px] border border-slug flex items-center justify-center  rounded-md">
          <img src="/p1.svg" alt="partners" className="lg:h-[39px] lg:w-[44px] h-[17px] w-[18px]"  />
          </div>
        </div> */}

        <div className="flex justify-end pt-8 container mx-auto">
          <Image
            src="/purple-dots-down.png"
            alt="partners"
            width={77}
            height={77}
          />
        </div>
      </div>
    </section>
  );
}

export default SupportPartnership;
