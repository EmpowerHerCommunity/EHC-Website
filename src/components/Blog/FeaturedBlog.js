import search from "../../../public/blog/searchicon.png";
import Image from "next/image";
const FeaturedBlog = ({ blogs }) => {
  return (
    <section className="container mx-auto mt-8 cursor-pointer">
      <section className="px-8 py-6">
        <h1>Monthly Featured Blog section is still pending...</h1>
      </section>
      <header>
        <nav className="lg:flex md:flex md:justify-between md:items-center lg:justify-between lg:items-center text-sm font-semibold mx-10">
          <div className="lg:block md:block hidden">
            <button className="w-28 h-10 rounded-full border border-black font-semibold bg-blogBtn">
              ALL TOPICS
            </button>
          </div>

          <div className="lg:w-7/12 md:w-6/12 lg:block md:block hidden">
            <ul className="flex justify-between items-center lg:w-11/12">
              <li className="hover:border-b border-primary hover:scale-105">
                WEB
              </li>
              <li className="hover:border-b border-primary hover:scale-105">
                DEVOPS
              </li>
              <li className="hover:border-b border-primary hover:scale-105">
                MOBILE
              </li>
              <li className="hover:border-b border-primary hover:scale-105">
                DESIGN
              </li>
              <li className="hover:border-b border-primary hover:scale-105">
                TESTING
              </li>
            </ul>
          </div>

          <div className="relative mt-5">
            <input
              placeholder="Search"
              className="border rounded-full h-10 px-3 placeholder:left-7 placeholder:relative text-sm lg:w-80  w-full"
            />
            <figure className="relative bottom-7 left-5">
              <Image src={search} width={14} height={14} />
            </figure>
          </div>
        </nav>
      </header>
    </section>
  );
};
export default FeaturedBlog;
