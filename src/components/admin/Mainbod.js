import Dashboard from "./Dashboard";
import SideBar from "./SideBar";

function Mainbod() {

  return (
    <section className="flex justify-between overflow-x-hidden w-full h-screen">
      <div className="">
        <SideBar />
      </div>
      <div className="shadow-sm w-10/12">
        <div className="px-6">
          <Dashboard  />
        </div>
      </div>
    </section>
  );
}

export default Mainbod;
