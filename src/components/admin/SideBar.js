import { forwardRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SideBarData } from "./SideBarData";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-primary shadow-sm">
      <div className="flex justify-center mt-6 mb-6">
        <h1 className="w-32 font-bold text-3xl text-white">Admin </h1>
      </div>

      <div className="flex flex-col h-96 justify-between">
        {SideBarData.map((item) => {
          return (
              <Link href={item.path} key={item.key} >
                <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors text-white hover:bg-slate-100 hover:text-primary ${router.pathname == `${item.path}` }`}>
                  <div className="mr-2 h-5 w-5 ">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-lg">{item.title}</p>
                  </div>
                </div>
              </Link>
          )
        })}
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
