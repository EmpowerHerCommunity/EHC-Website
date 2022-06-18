import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// import { FaLongArrowRight } from 'react-icons/fa';
// import { FaLongArrowAltRight } from 'react-icons/fa';
// import { FaArrow } from 'react-icons/fa';
// import { FaLongArrow } from 'react-icons/fa';
import styles from '../../styles/Home.module.css';
import AOS from 'aos';

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
      image: '/testimonial1.png',
      name: 'Falomo Sharon',
      role: 'Front end developer',
      testimonial: "I participated in Bootcamp 2.0 front-end web development and it was amazing, I really enjoyed my time in the Bootcamp. Especially meeting our facilitators for questions and then giving us assignments. I started this Bootcamp not being able to make a responsive website now I make great responsive websites you should definitely join this Bootcamp."
    },
    {
      id: 2,
      image: '/testimonial2.png',
      name: 'Nancy Olatuja',
      role: 'Front end developer',
      testimonial: "My Experience at EHC Mentorship Academy 1 and BootCamp Cohort 2 is one I will never forget. Starting as a front-end development newbie without any prior knowledge to being able to create user-friendly websites and communicate ideas. Facilitators and team members were always available to meet with whatever difficult situation you face. I'm grateful I have this community to help in my tech journey."
    },
    {
      id: 3,
      image: '/testimonial3.png',
      name: 'Jessica Joseph',
      role: 'Front end developer',
      testimonial: "My experience at EHC cohort 2 Bootcamp is definitely one to remember. I didn’t just gain the knowledge I also found my tech family. After graduation, all the knowledge I acquired from my facilitators improved me, as I went from being a basic frontend developer to a React developer in three months."
    },
  ]
  const [prevIndex, setPrevIndex] = useState(2);
  const [nextIndex, setNextIndex] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState("");
  // const prevRef = useRef(null);
  const currentRef = useRef(null);
  // const nextRef = useRef(null);
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
  // once: true,
  useEffect(() => {
    AOS.init({
      duration: 400,
      // startEvent
    });
    AOS.refresh();
  }, []);
  const nextFunc = () => {
    console.log('Test next');
    // setPrevIndex(prevState => {
    // currentIndex <= 0 ? allTestimonials.length - 1 : currentIndex + 1


    // setPrevIndex(
    //   prevIndex >= allTestimonials.length - 1 ? 0 : prevIndex + 1
    //   )
    //   setNextIndex(
    //     nextIndex >= allTestimonials.length - 1 ? 0 : nextIndex + 1
    //     )
    //     // setCurrentIndex(prev => prev + 1)
    //     // })
    //     setCurrentIndex(
    //       currentIndex >= allTestimonials.length - 1 ? 0 : currentIndex + 1
    //       )
    // currentRef.current.classList.remove('aos-animate')
    // prevRef.current.classList.remove('aos-animate')
    // nextRef.current.classList.remove('aos-animate')
    // currentRef.current.classList.remove('transitionLeftIn')
    // prevRef.current.classList.remove('transitionLeftIn')
    // nextRef.current.classList.remove('transitionLeftIn')
    // console.log(prevRef.current);
    // // currentRef.current.classList.remove('aos-init')
    // console.log(nextRef.current);
    // console.log(currentRef.current.classList);
    setTimeout(() => {
      // currentRef.current.classList.add('aos-animate')
      // prevRef.current.classList.add('aos-animate')
      // nextRef.current.classList.add('aos-animate')
      // currentRef.current.classList.add('transitionLeftIn')
      // prevRef.current.classList.add('transitionLeftIn')
      // nextRef.current.classList.add('transitionLeftIn')
      // currentRef.current.classList.add('aos-init')
      // console.log(currentRef.current.classList);
      // // console.log(prevRef.current.classList);
      // console.log(nextRef.current.classList);
      // console.log(prevRef.current);
      // console.log(nextRef.current);
      setPrevIndex(
        prevIndex >= allTestimonials.length - 1 ? 0 : prevIndex + 1
      )
      setNextIndex(
        nextIndex >= allTestimonials.length - 1 ? 0 : nextIndex + 1
      )
      // setCurrentIndex(prev => prev + 1)
      // })
      setCurrentIndex(
        currentIndex >= allTestimonials.length - 1 ? 0 : currentIndex + 1
      )

    }, 100);
    console.log(currentRef);
    // setAnimate('fade-right');
    setAnimate('fade-left');
    // AOS.init({ duration: 2500 });
    // AOS.refresh();
    // console.log(this.refs)
  }
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 relative z-10">
        <div className="absolute top-[0px] left-[5px] sm:left-[-15px] ml-4">
          {/* <img src="/contact-dots.svg" alt="" className="" /> */}
          <Image src='/group2.png' width='115px' height='115px' />
        </div>
        <div className=''>
          <div className="relative mb-14 pt-4 max-w-max mx-auto">
            <h2 className='hero-h2 font-normal md:text-5xl text-4xl font-bold max-w-max'>
              What Our Students Say
            </h2>
            <hr className="border-0 h-1 w-3/5 absolute bottom-0 left-0 bg-yellow" />
          </div>
          <div className="">
            <div className="flex gap-4 relative z-10 mt-3">
              <div className={`overflow-hidden absolute top-0 bottom-0 left-0 lg:relative z-30 p-2 lg:p-0 min-w-fit flex-none`}>
                <div className={`overflow-hidden relative z-10 lg:w-44 h-full flex items-center justify-center`}>
                  <div className={`overflow-hidden relative z-10 w-0 lg:w-full h-full flex items-center`}>
                    {
                      allTestimonials.map((testimonial, i) => {
                        return (
                          <div className={`overflow-hidden absolute z-10 w-0 lg:w-full h-full flex items-center justify-center flex-none`} style={{ transform: `translateX(${(i - prevIndex) * 100}%)`, transition: 'all 0.5s' }}>
                            <div className={`relative z-10 w-0 lg:w-full h-full flex items-center justify-center bg-no-repeat bg-cover bg-center ${styles.navigationCard}`} style={{ backgroundImage: `url('${testimonial.image}')` }}>
                            </div>
                          </div>
                        )
                      }
                      )
                    }
                  </div>
                  <button className="rounded-full w-10 h-10 block bg-white mx-4 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 lg:tranform z-20 opacity-30 hover:opacity-80 lg:opacity-100" onClick={prevFunc}>
                    <FaArrowLeft size="1.5rem" className='mx-auto text-primary' />
                  </button>
                </div>
              </div>
              <div className="overlow-hidden relative min-h-[480px] sm:min-h-[360px] xl:min-h-[340px] z-20 flex-auto">
                  <div className={`overflow-hidden relative z-10 w-full h-full flex items-center`}>
                    {
                      allTestimonials.map((testimonial, i) => {
                        return (
                          <div className={`overflow-hidden absolute z-10 w-full h-full flex items-center justify-center flex-none`} style={{ transform: `translateX(${(i - currentIndex) * 100}%)`, transition: 'all 0.5s' }}>
                            <div className={" bg-[url('/rectangle.png')] font-normal md:text-lg text-sm leading-6 bg-no-repeat bg-cover bg-right-top w-full h-full"}>
                              <div className="flex items-stretch h-full">
                                <div className="p-5 flex-auto">
                                  {/* {prevIndex} |
                                  {currentIndex} |
                                  {nextIndex} */}
                                  <p className="text-lg">
                                    {testimonial.testimonial}
                                  </p>
                                  <p className='text-2xl font-normal leading-6 mt-5 text-primary'>
                                    {testimonial.name}
                                  </p>
                                  <span className='text-base leading-6 font-normal'>
                                    {testimonial.role}
                                  </span>
                                </div>
                                <div className="flex-none flex items-end w-44 sm:w-fit">
                                  <Image src={testimonial.image} width='213px' height='315px' alt='' />
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      }
                      )
                    }
                  </div>
              </div>
              <div className={`overflow-hidden absolute top-0 bottom-0 right-0 lg:relative z-30 p-2 lg:p-0 min-w-fit flex-none`}>
                <div className={`overflow-hidden relative z-10 lg:w-44 h-full flex items-center justify-center`}>
                  <div className={`overflow-hidden relative z-10 w-0 lg:w-full h-full flex items-center`}>
                    {
                      allTestimonials.map((testimonial, i) => {
                        return (
                          <div className={`overflow-hidden absolute z-10 w-0 lg:w-full h-full flex items-center justify-center flex-none`} style={{ transform: `translateX(${(i - nextIndex) * 100}%)`, transition: 'all 0.5s' }}>
                            <div className={`relative z-10 w-0 lg:w-full h-full flex items-center justify-center bg-no-repeat bg-cover bg-center ${styles.navigationCard}`} style={{ backgroundImage: `url('${testimonial.image}')` }}>
                            </div>
                          </div>
                        )
                      }
                      )
                    }
                  </div>
                  <button className="rounded-full w-10 h-10 block bg-white mx-4 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 lg:tranform z-20 opacity-30 hover:opacity-80 lg:opacity-100" onClick={nextFunc}>
                    <FaArrowRight size="1.5rem" className='mx-auto text-primary' />
                  </button>
                </div>
              </div>
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