import { useRouter } from "next/router";
import { deleteCookie } from 'cookies-next';
import Link from "next/link";

import {
  MdOutlineArticle,
  MdOutlineVolunteerActivism,
  MdSupervisedUserCircle,
  MdEmojiEvents,
} from "react-icons/md";

const SideBar = () => {
  const router = useRouter();
  const handleLogOut = ()=>{
    localStorage.clear()
    deleteCookie("acessToken")
    router.push("/login")
  }

  return (
    <div className="fixed w-56 h-full bg-primary shadow-sm">
      <div className="flex justify-center mt-10 mb-14">
        <h1 className="font-bold w-32 text-3xl text-white">Admin </h1>
      </div>

      <nav className="flex flex-col  items-center  text-white font-medium">
        <div
          className={` py-3 rounded text-center cursor-pointer mb-3 items-start flex flex-col h-96 justify-between transition-colors text-white}`}
        >
          <div className="flex py-2 px-3 items-center hover:border hover:rounded-md hover:bg-white hover:text-primary  ">
            <div className=" h-5 w-6 ">
              <MdEmojiEvents />
            </div>
            <Link href="/admin/dashboard/event">
              <button className="text-lg">Events</button>
          </Link>
            </div>
          <div className="flex py-2 px-3 items-center hover:border hover:rounded-md hover:bg-white hover:text-primary  ">
            <div className=" h-5 w-6 ">
              <MdOutlineVolunteerActivism />
            </div>
            <Link href="/admin/dashboard/create">
              <button className="text-lg">Create Event</button>
              </Link>
          </div>

          <div className="flex py-2 px-3 items-center hover:border hover:rounded-md hover:bg-white hover:text-primary  ">
            <div className=" h-5 w-6 ">
              <MdOutlineArticle />
            </div>
            <Link href="/admin/dashboard/blog">
              <button className="text-lg">Blog Posts</button>
              </Link>
          </div>

          <div  className="flex py-2 px-3 items-center hover:border hover:rounded-md hover:bg-white hover:text-primary  ">
            <div className=" h-5 w-6 ">
              <MdEmojiEvents />
            </div>
            <Link href="/admin/dashboard/featured">
              <button className="text-lg">Featured Blogs</button>
            </Link>
          </div>
          <div className="flex py-2 px-3 items-center hover:border hover:rounded-md hover:bg-white hover:text-primary  ">
            <div className=" h-5 w-6 ">
              <MdOutlineArticle />
            </div>
            <Link href="/admin/dashboard/publish">
              <button className="text-lg">Publish</button>
            </Link>
          </div>

          <div className="flex py-2 px-3 items-center hover:border hover:rounded-md hover:bg-white hover:text-primary  ">
            <div className=" h-5 w-6 ">
              <MdSupervisedUserCircle />
            </div>
            <div>
              <button className="text-lg" onClick={handleLogOut}>Log Out</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
  };

export default SideBar;
