import React from 'react'

const SupportHero = () => {
    return (
        <>
            <section className="container mx-auto flex px-8 py-12 md:flex-row flex-col items-center">
                <article class="lg:flex-grow lg:pr-24 flex flex-col mb-16 md:mb-0 text-left">
                    <h1 className="text-5xl mb-3 font-semibold text-primary leading-normal">Support Us &
                        <br className="lg:inline-block" /> Empower Her
                    </h1>
                    <p className="mb-1 lg:text-xl text-2xl lg:w-10/12">Funds to support the women in tech BootCamp for over 6,000 ladies in Nigeria, Nairobi, America, UK, Ghana and Cote d'ivoire.</p>
                </article>
                <figure className="lg:max-w-lg lg:w-full w-full mx-auto flex justify-center">
                    <img
                                  data-aos="fade-left"
                    className="object-cover object-center rounded" alt="EHC group" src="/ehc.svg" />
                </figure>
            </section>
        </>
    )
}

export default SupportHero