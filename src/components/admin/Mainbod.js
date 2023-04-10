import Dashboard from "./Dashboard";
import SideBar from "./SideBar";

function Mainbod() {

  return (
    <section className="flex justify-between">
      <div className="w-2/12">
        <SideBar />
      </div>
      <div className="  shadow-sm w-10/12">
        <div className="py-10 px-4">
        </div>
        <div className="px-6">
          <Dashboard  />
        </div>
      </div>
    </section>
  );
}

export default Mainbod;
