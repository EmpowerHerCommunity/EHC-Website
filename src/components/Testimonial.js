import React, { useState } from 'react';
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// import { FaLongArrowRight } from 'react-icons/fa';
// import { FaLongArrowAltRight } from 'react-icons/fa';
// import { FaArrow } from 'react-icons/fa';
// import { FaLongArrow } from 'react-icons/fa';
import styles from '../../styles/Home.module.css';

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
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 50
  }
};

const Testimonial = () => {
  const allTestimonials = [
    {
      id: 1,
      image: '/testimonial2.jpg',
      name: 'Natasha Johnson',
      role: 'Software Engineer',
      testimonial: "Serene environment. Great facilitators. The Empower Her boot camp exceeded my expectations. This for me was a journey to self discovery. I've learned a lot and gained tools to help me in not just the tech world but in life. This was a great opportunity and I'm grateful for it."
    },
    {
      id: 2,
      image: '/testimonial1.jpg',
      name: 'Natasha Johnson',
      role: 'Software Engineer',
      testimonial: "Serene environment. Great facilitators. The Empower Her boot camp exceeded my expectations. This for me was a journey to self discovery. I've learned a lot and gained tools to help me in not just the tech world but in life. This was a great opportunity and I'm grateful for it."
    },
    {
      id: 3,
      image: '/testimonial2.jpg',
      name: 'Natasha Johnson',
      role: 'Software Engineer',
      testimonial: "Serene environment. Great facilitators. The Empower Her boot camp exceeded my expectations. This for me was a journey to self discovery. I've learned a lot and gained tools to help me in not just the tech world but in life. This was a great opportunity and I'm grateful for it."
    },
    {
      id: 4,
      image: '/testimonial3.jpg',
      name: 'Natasha Johnson',
      role: 'Software Engineer',
      testimonial: "Serene environment. Great facilitators. The Empower Her boot camp exceeded my expectations. This for me was a journey to self discovery. I've learned a lot and gained tools to help me in not just the tech world but in life. This was a great opportunity and I'm grateful for it."
    },
  ]
  const [prevIndex, setPrevIndex] = useState(3);
  const [nextIndex, setNextIndex] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevFunc = () => {
    // setPrevIndex(prevState => {
    setPrevIndex(
      prevIndex <= 0 ? allTestimonials.length - 1 : prevIndex - 1
    )
    setNextIndex(
      nextIndex <= 0 ? allTestimonials.length - 1 : nextIndex - 1
    )
    setCurrentIndex(
      currentIndex <= 0 ? allTestimonials.length - 1 : currentIndex - 1
    )
    console.log('Test prev');
    // })
  }
  const nextFunc = () => {
    console.log('Test next');
    // setPrevIndex(prevState => {
    // currentIndex <= 0 ? allTestimonials.length - 1 : currentIndex + 1
    setPrevIndex(
      prevIndex >= allTestimonials.length - 1 ? 0 : prevIndex + 1
    )
    setNextIndex(
      nextIndex >= allTestimonials.length - 1 ? 0 : nextIndex + 1
    )
    // })
    // setCurrentIndex(prev => prev + 1)
    setCurrentIndex(
      currentIndex >= allTestimonials.length - 1 ? 0 : currentIndex + 1
    )
  }
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 relative">
        <div className="absolute top-[0px] left-[5px] sm:left-[-15px] ml-4">
          {/* <img src="/contact-dots.svg" alt="" className="" /> */}
          <Image src='/white-dots-up.png' width='135px' height='135px' />
        </div>
        <div className=''>
          <div className="relative mb-8 max-w-max mx-auto">
            <h2 className='hero-h2 font-normal md:text-5xl text-5xl font-bold max-w-max'>
              What Our Students Say
            </h2>
            <hr className="border-0 h-1 w-3/5 absolute bottom-0 left-0 bg-yellow" />
          </div>
          <div className="">
            <div className="flex gap-4">
              {/* <div className={`relative z-10 w-0 md:w-44 flex flex-none items-center justify-center bg-[url('/testimonial1.jpg')] ${styles.navigationCard}`} style={{backgroundImage: allTestimonials[0].image}}> */}
              {/* <div className={`overflow-hidden relative z-10 w-0 md:w-44 flex flex-none items-center justify-center bg-no-repeat bg-cover bg-center ${styles.navigationCard}`} style={{ backgroundImage: `url('${allTestimonials[prevIndex].image}')` }}> */}
              <div className={`overflow-hidden relative z-10 min-w-fit flex-none`}>
                <div className={`overflow-hidden relative z-10 w-0 md:w-44 h-full flex items-center justify-center bg-no-repeat bg-cover bg-center ${styles.navigationCard}`} style={{ backgroundImage: `url('${allTestimonials[prevIndex].image}')` }}>
                  <div className={`relative z-10 w-0 md:w-full h-full flex items-center justify-center bg-no-repeat bg-cover bg-center ${styles.navigationCard}`} style={{ backgroundImage: `url('${allTestimonials[prevIndex].image}')` }}>
                  </div>
                    <button className="rounded-full w-10 h-10 block bg-white mx-4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 tranform z-20 text-primary" onClick={prevFunc}>
                      <FaArrowLeft size="1.5rem" className='mx-auto' />
                      {/* <FaLongArrowAltRight size="1.5rem" /> */}
                    </button>
                </div>
              </div>
              <div className="overlow-hidden relative z-10">
                <div className="bg-[url('/rectangle.png')] font-normal md:text-lg text-sm leading-6 bg-no-repeat bg-cover bg-right-top">
                  <div className="flex">
                    <div className="p-5 flex-auto">
                      {prevIndex} |
                      {currentIndex} |
                      {nextIndex}
                      <p className="">
                        {/* Serene environment. Great facilitators. The Empower Her boot camp exceeded my expectations. This for me was a journey to self discovery. I&apos;ve learned a lot and gained tools to help me in not just the tech world but in life. This was a great opportunity and I&apos;m grateful for it. */}
                        {allTestimonials[currentIndex].testimonial}
                      </p>
                      <div className='text-2xl font-normal leading-6 mt-5 text-fuchsia-900'>

                        {allTestimonials[currentIndex].name}
                      </div>
                      <span className='text-base leading-6 font-normal'>
                        {allTestimonials[currentIndex].role}
                      </span>
                    </div>
                    <div className="flex-none">
                      {/* <Image src='/testimonial1.jpg' width='213px' height='315px' alt='' /> */}
                      <Image src={allTestimonials[currentIndex].image} width='213px' height='315px' alt='' />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`overflow-hidden relative z-10 w-0 md:w-44 flex flex-none items-center justify-center bg-no-repeat bg-cover bg-center ${styles.navigationCard}`} style={{ backgroundImage: `url('${allTestimonials[nextIndex].image}')` }}>
                <button className="rounded-full w-10 h-10 block bg-white mx-4 absolute z-20" onClick={nextFunc}>
                  <FaArrowRight size="1.5rem" className='mx-auto' />
                </button>
              </div>
              {/* <button className="w-44 flex flex-none items-center justify-center bg-primary bg-opacity-70">
                <span className="rounded-full w-10 h-10 block bg-white"></span>
              </button> */}
            </div>
          </div>

          <div className=''>
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
              renderButtonGroupOutside={false}
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
                <Image src='/testimonial2.jpg' width='213px' height='315px' alt='' />
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
                <Image src='/testimonial3.jpg' width='213px' height='315px' alt='' />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial