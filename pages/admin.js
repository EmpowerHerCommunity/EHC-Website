import Mainbod from "../src/components/admin/Mainbod"



export default function Home() {
  return (
    <>
      <div className=" mb-14">
        <h2 className="text-gray-700 text-3xl font-bold">Order</h2>
        <p>28 orders found</p>
      </div>
      <Mainbod />
    </>
  );
}