import React from 'react'

const BlogCard = () => {
    return (
        <>
            <section>
                <section className="container px-5 py-16 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <article className="xl:w-1/2 md:w-1/2 p-4">
                            <div className="border-2 border-black px-3 py-2 rounded-lg">
                                <img className="h-64 rounded-lg w-full object-cover object-center mb-6" src="/blog-card.jpg" alt="content" />
                                <section className="flex">
                                    <h2 className="text-xs font-medium mb-1">4 March 2023 </h2>
                                    <h2 className="mb-1 ml-2 text-xs"> . 5 Minutes Read</h2>
                                </section>
                                <h1 className="lg:text-2xl text-xl font-bold mt-1 mb-2">Why CSS units matter to your responsive website designs</h1>
                                <p class="text-base leading-relaxed">Let's discuss using CSS units to create fully responsive websites that size and resize elements. Plus, how to decide on the best units for each situation.</p>
                                <section className="flex items-center flex-wrap mt-3">
                                    <img src="/blog-card.jpg" className="w-8 h-8 rounded-full" alt="writer" />
                                    <p className="font-medium ml-2 md:mb-1 lg:mb-0">Aniekwe Jessica</p>
                                </section>
                                <aside className="flex items-center flex-wrap mb-2 mt-4">
                                    <button className="rounded-2xl border-2 border-black py-1 px-4">CSS</button>
                                    <button className="rounded-2xl border-2 border-black py-1 px-4 ml-2">React</button>
                                </aside>
                            </div>
                        </article>

                        <article className="xl:w-1/2 md:w-1/2 p-4">
                            <div className="border-2 border-black px-3 py-2 rounded-lg">
                                <img className="h-64 rounded-lg w-full object-cover object-center mb-6" src="/blog-card.jpg" alt="content" />
                                <section className="flex">
                                    <h2 className="text-xs font-medium mb-1">4 March 2023 </h2>
                                    <h2 className="mb-1 ml-2 text-xs"> . 5 Minutes Read</h2>
                                </section>
                                <h1 className="lg:text-2xl text-xl font-bold mt-1 mb-2">Why CSS units matter to your responsive website designs</h1>
                                <p class="leading-relaxed text-base">Let's discuss using CSS units to create fully responsive websites that size and resize elements. Plus, how to decide on the best units for each situation.</p>
                                <section className="flex items-center flex-wrap mt-3">
                                    <img src="/blog-card.jpg" className="w-8 h-8 rounded-full" alt="writer" />
                                    <p className="font-medium ml-2 md:mb-1 lg:mb-0">Aniekwe Jessica</p>
                                </section>
                                <aside className="flex items-center flex-wrap mb-2 mt-4">
                                    <button className="rounded-2xl border-2 border-black py-1 px-4">CSS</button>
                                    <button className="rounded-2xl border-2 border-black py-1 px-4 ml-2">React</button>
                                </aside>
                            </div>
                        </article>
                       
                    </div>
                </section>
            </section>
        </>
    )
}

export default BlogCard