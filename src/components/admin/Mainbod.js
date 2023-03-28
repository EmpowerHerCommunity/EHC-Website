import OrderTable from "./OrderTable";
import Link from "next/link";
import Layout from "./Layout";

function Mainbod() {
  return (
    <section className="flex justify-between">
      <div className="w-2/12">
        <Layout />
      </div>
      <div className="  shadow-sm w-10/12">
      <div className="py-6 px-4">
            <label>Date</label>
            <input
              type={"date"}
              className="p-1 ml-2 rounded-sm text-gray-500 bg-gray-300"
            />
          </div>
          <div className="px-6">
          <OrderTable />
          </div>
      </div>
    </section>
  );
}

export default Mainbod;
