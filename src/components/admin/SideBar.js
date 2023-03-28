import { forwardRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SideBarData } from "./SideBarData";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-blue-600 shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <h1 className="w-32 font-bold text-3xl text-white">eProduct</h1>
      </div>

      <div className="flex flex-col">
        {SideBarData.map((item) => {
          return (
              <Link href={item.path} key={item.key} >
                <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors text-white hover:bg-white hover:text-blue-600 ${router.pathname == `${item.path}` }`}>
                  <div className="mr-2 h-5 w-5 ">
                    {item.icon}
                  </div>
                  <div>
                    <p>{item.title}</p>
                  </div>
                </div>
              </Link>
          )
        })}
      </div>
      <div className=" absolute bottom-10 left-5 list-none text-white underline decoration-1">
          <div className="flex flex-row justify-between">
          <a href="" className="px-1"><li>Facebook</li></a>
          <a href="" className="px-1"><li>Twitter</li></a>
          <a href="" className="px-1"><li>Google</li></a>
          </div>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
