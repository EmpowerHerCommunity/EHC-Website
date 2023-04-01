import { forwardRef } from "react";
import { useRouter } from "next/router";
import {
  MdOutlineArticle,
  MdOutlineVolunteerActivism,
  MdSupervisedUserCircle,
  MdEmojiEvents,
} from "react-icons/md";

const SideBar = forwardRef(({ showNav, display, handleDisplay }, ref) => {
  const router = useRouter();
  return (
    <div ref={ref} className="fixed w-56 h-full bg-primary shadow-sm">
      <div className="flex justify-center mt-10 mb-14">
        <h1 className="font-bold w-32 text-3xl text-white">Admin </h1>
      </div>

      <nav className="flex flex-col  items-center  text-white font-medium">
        <div
          className={` py-3 rounded text-center cursor-pointer mb-3 items-start flex flex-col h-96 justify-between transition-colors text-white}`}
        >
          <figure onClick={()=>handleDisplay("events")} className="flex py-2 px-3 items-center hover:border hover:rounded-md hover:bg-white hover:text-primary  ">
            <div className=" h-5 w-6 ">
              <MdEmojiEvents />
            </div>
            <div>
              <p className="text-lg">Events</p>
            </div>
          </figure>

          <figure onClick={()=>handleDisplay("posts")} className="flex py-2 px-3 items-center hover:border hover:rounded-md hover:bg-white hover:text-primary  ">
            <div className=" h-5 w-6 ">
              <MdOutlineArticle />
            </div>
            <div>
              <p className="text-lg">Blog Posts</p>
            </div>
          </figure>

          <figure onClick={()=>handleDisplay("featured")} className="flex py-2 px-3 items-center hover:border hover:rounded-md hover:bg-white hover:text-primary  ">
            <div className=" h-5 w-6 ">
              <MdEmojiEvents />
            </div>
            <div>
              <p className="text-lg">Featured Blogs</p>
            </div>
          </figure>

          <figure className="flex py-2 px-3 items-center hover:border hover:rounded-md hover:bg-white hover:text-primary  ">
            <div className=" h-5 w-6 ">
              <MdSupervisedUserCircle />
            </div>
            <div>
              <p className="text-lg">Log Out</p>
            </div>
          </figure>
        </div>
      </nav>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
