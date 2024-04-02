import React, { useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const EventsGallery = ({images, galleryI}) => {
    const allTestimonials = [
        {
            id: 1,
            image: '/testimonial1.png',
            name: 'Falomo Sharon'
        },
        {
            id: 2,
            image: '/testimonial2.png',
            name: 'Nancy Olatuja'
        },
        {
            id: 3,
            image: '/testimonial3.png',
            name: 'Jessica Joseph'
        },
        {
            id: 1,
            image: '/testimonial1.png',
            name: 'Falomo Sharon'
        },
        {
            id: 2,
            image: '/testimonial2.png',
            name: 'Nancy Olatuja'
        },
        {
            id: 3,
            image: '/testimonial3.png',
            name: 'Jessica Joseph'
        },
    ]
    const [prevIndex, setPrevIndex] = useState(2);
    const [nextIndex, setNextIndex] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevFunc = () => {
        setPrevIndex(
            prevIndex <= 0 ? allTestimonials.length - 1 : prevIndex - 1
        )
        setNextIndex(
            nextIndex <= 0 ? allTestimonials.length - 1 : nextIndex - 1
        )
        setCurrentIndex(
            currentIndex <= 0 ? allTestimonials.length - 1 : currentIndex - 1
        )
    }
    const nextFunc = () => {
        // setTimeout(() => {
            setPrevIndex(
                prevIndex >= allTestimonials.length - 1 ? 0 : prevIndex + 1
            )
            setNextIndex(
                nextIndex >= allTestimonials.length - 1 ? 0 : nextIndex + 1
            )
            setCurrentIndex(
                currentIndex >= allTestimonials.length - 1 ? 0 : currentIndex + 1
            )

        // }, 100);
    }
    return (
        <div className="py-4">
            <h3 className="text-lg my-4 font-bold">
            Gallery
            </h3>
            <div className="flex gap-1 relative z-10 mt-3">
                <div className={`overflow-hidden relative z-30 lg:p-0 min-w-fit flex-none`}>
                    <div className={`overflow-hidden relative z-10 w-10 h-full flex items-center justify-center`}>
                        <button className={((currentIndex <= 0) ? "opacity-30" : "") + " rounded-full w-10 h-10 block bg-primary hover:opacity-80"} onClick={prevFunc} disabled={currentIndex <= 0}>
                            <FaArrowLeft size="1.5rem" className='mx-auto text-white' />
                        </button>
                    </div>
                </div>
                <div className="overlow-hidden relative min-h-[100px] z-20 flex-auto">
                    <div className={`overflow-hidden relative z-10 w-full h-full flex items-center`}>
                        {
                            images.map((image, i) => {
                                return (
                                    <div
                                        className={`overflow-hidden absolute z-10 px-2 w-1/4 h-full flex items-center justify-center flex-none`}
                                        style={{ transform: `translateX(${(i - currentIndex) * 100}%)`, transition: 'all 0.5s' }}
                                        key={`gallery${i}`}
                                    >
                                        <div className={" w-full h-full"}>
                                            <div className="flex items-stretch h-full">
                                                <div className="flex-none flex overflow-hidden rounded-xl w-fit">
                                                    <img src={image} className='w-24 h-24' alt='event images' />
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
                <div className={`overflow-hidden relative z-30 lg:p-0 min-w-fit flex-none`}>
                    <div className={`overflow-hidden relative z-10 w-10 h-full flex items-center justify-center`}>
                        <button className={((currentIndex >= images.length - 4) ? "opacity-30" : "") + " rounded-full w-10 h-10 block bg-primary hover:opacity-80 "} onClick={nextFunc} disabled={currentIndex >= images.length - 4}>
                            <FaArrowRight size="1.5rem" className='mx-auto text-white' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsGallery;