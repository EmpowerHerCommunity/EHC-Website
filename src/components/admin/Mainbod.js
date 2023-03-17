import OrderTable from "./OrderTable"
import Link from 'next/link';

function Mainbod() {
    return (
        <>
            <div className=" flex flex-row justify-between pb-5">
                <div>
                    <ul className="flex flex-row justify-evenly text-gray-400 ">
                        <Link href="/"><li className="hover:text-black hover:underline decoration-1">All orders</li></Link>
                        <Link href="/Dispatch"><li className="px-3 hover:text-black hover:underline decoration-1">Dispatch</li></Link>
                        <Link href="/Pending"><li className="px-3 hover:text-black hover:underline decoration-1">Pending</li></Link>
                        <Link href="/Completed"><li className="px-3 hover:text-black hover:underline decoration-1">Completed</li></Link>
                    </ul>
                </div>
                <div>
                    <div>
                        <label>Date</label>
                        <input type={"date"} className="p-1 ml-2 rounded-sm text-gray-500 bg-gray-300" />
                    </div>
                </div>
            </div>
            <div className=" h-96 shadow-sm">
                <OrderTable />
            </div>
        </>
    );
}

export default Mainbod;