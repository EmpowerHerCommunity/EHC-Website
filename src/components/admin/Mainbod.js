import { useState } from "react";
import Dashboard from "./Dashboard";
import Layout from "./Layout";

function Mainbod() {

  const [display, setDisplay] = useState("events");
  const handleDisplay = (v) => {
    setDisplay(v);
  };

  return (
    <section className="flex justify-between">
      <div className="w-2/12">
        <Layout  display={display} handleDisplay={handleDisplay}/>
      </div>
      <div className="  shadow-sm w-10/12">
        <div className="py-10 px-4">
          <h1 className="text-4xl">Dashboard</h1>
        </div>
        <div className="px-6">
          <Dashboard display={display} handleDisplay={handleDisplay} />
        </div>
      </div>
    </section>
  );
}

export default Mainbod;
