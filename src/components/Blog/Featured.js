import React from "react";
import Image from "next/image";

function Featured() {
  return (
    <article className="flex flex-col container mx-auto px-6 lg:py-10 py-4 relative">
      <figure>
        <img src="/cover1.png" alt="article cover" className="w-full lg:h-auto h-56" />
      </figure>
      <div className="lg:absolute static bottom-32 left-0 lg:left-16 text-black lg:text-light">
        <figcaption className="lg:w-6/12 w-full">
          <h1 className="mb-4 lg:text-4xl text-2xl pt-4 font-semibold">
            Why CSS Units Matter to Your Responsive Website Designs
          </h1>
          <p className="lg:text-lg text-xl">
            Let's discuss using CSS units to create fully responsive websites
            that size and resize elements. Plus, how to decide on the best units
            for each situation.
          </p>
        </figcaption>
        <section className="py-4 flex items-center">
          <img
            src="/cover1.png"
            className="w-10 h-10 rounded-full"
            alt="author avatar"
          />
          <p className="lg:text-lg text-xl ml-6">Victoria Akpan</p>
        </section>
        <aside className="py-2">
          <button className="rounded-2xl border border-black py-1 px-4 ml-2 text-lg">
            Web Development
          </button>
          <button className="rounded-2xl border border-black py-1 px-4 ml-2 text-lg">
            Mobile Development
          </button>
        </aside>
      </div>
    </article>
  );
}

export default Featured;
