import React from 'react';
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 50
  }
};

const Testimonial = () => {
  return (
    <div className='p-10'>
      <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlaySpeed={3000}
      autoPlay={true}
      // centerMode={true}
      partialVisible={true}
      // className="bg-[url('/rectangle.png')]"
      containerClass="carousel-container"
      // customButtonGroup={<ButtonGroup />}
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={true}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside = {false}
      renderDotsOutside={false}
      responsive={responsive}
      // showDots={true}
      sliderClass=""
      slidesToSlide={1}
      >
  <div className="bg-[url('/rectangle.png')] font-normal md:text-lg text-sm leading-6 p-5">
  Serene environment. Great facilitators. The Empower Her boot camp exceeded my expectations. This for me was a journey to self discovery. I&apos;ve learned a lot and gained tools to help me in not just the tech world but in life. This was a great opportunity and I&apos;m grateful for it. 
    <div className='text-2xl font-normal leading-6 mt-5 text-fuchsia-900'>
      Okafor Favor <br />
    </div>
      <span className='text-base leading-6 font-normal'>
        Product Designer
      </span>
  </div>
  <div>
    <Image src='/testimonial1.jpg' width='213px' height='315px' alt='' />
  </div>
  <div className="bg-[url('/rectangle.png')] font-normal md:text-lg text-sm leading-6 p-5">
  Serene environment. Great facilitators. The Empower Her boot camp exceeded my expectations. This for me was a journey to self discovery. I&apos;ve learned a lot and gained tools to help me in not just the tech world but in life. This was a great opportunity and I&apos;m grateful for it. 
    <div className='text-2xl font-normal leading-6 mt-5 text-fuchsia-900'>
      Natasha Johnson <br />
    </div>
      <span className='text-base leading-6 font-normal'>
        Software Engineer
      </span>
  </div>
  <div>
    <Image src='/testimonial2.jpg' width='213px' height='315px' alt=''/>
  </div>
  <div className="bg-[url('/rectangle.png')] font-normal md:text-lg text-sm leading-6 p-5">
  Serene environment. Great facilitators. The Empower Her boot camp exceeded my expectations. This for me was a journey to self discovery. I&apos;ve learned a lot and gained tools to help me in not just the tech world but in life. This was a great opportunity and I&apos;m grateful for it. 
    <div className='text-2xl font-normal leading-6 mt-5 text-fuchsia-900'>
      Mary Jane <br />
    </div>
      <span className='text-base leading-6 font-normal'>
        Blockchain Developer
      </span>
  </div>
  <div>
    <Image src='/testimonial3.jpg' width='213px' height='315px' alt=''/>
  </div>
      </Carousel>
    </div>
  )
}

export default Testimonial