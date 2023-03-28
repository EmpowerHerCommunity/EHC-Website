
import { useState } from 'react';
import { orders } from "./OrderData";
import { useEffect } from 'react';

const PAGE_SIZE = 10 // number of items to display per page

const OrderTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [orderData, setOrderData] = useState(orders);
  const [slicedData, setSlicedData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ column: null, direction: null });

  useEffect(() => {
    const startIndex = currentPage * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    setSlicedData(orderData.slice(startIndex, endIndex));
  }, [currentPage, orderData]);

  const handleSort = (event) => {
    const column = event.target.dataset.column;
    const newOrders = [...orderData];
    const isAscending = sortConfig.column === column && sortConfig.direction === 'asc';

    newOrders.sort((a, b) => {
      if (a[column] < b[column]) {
        return isAscending ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return isAscending ? 1 : -1;
      }
      return 0;
    });

    setOrderData(newOrders);
    setSortConfig({ column, direction: isAscending ? 'desc' : 'asc' });
    setCurrentPage(0); // reset to first page after sorting
  };
 
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const numPages = Math.ceil(orderData.length / PAGE_SIZE);
  const pageNumbers = [...Array(numPages).keys()];

  return (
    <>
    <div className='rounded-lg shadow overflow-scroll md:overflow-visible'> 
      <table className='pl-9 w-full'>
        <thead className='border-b-2 text-left bg-gray-200 shadow-lg '>
          <tr >
            <th data-column="id" className=" p-3 text-sm font-semibold tracking-wide rounded-l-lg" onClick={handleSort}>
              ID
              {sortConfig.column === 'id' && sortConfig.direction === 'asc' && <span>↑</span>}
              {sortConfig.column === 'id' && sortConfig.direction === 'desc' && <span>↓</span>}
            </th>
            <th data-column="name"  className="text-sm font-semibold tracking-wide" onClick={handleSort}>
              Name
            </th>
            <th className="text-sm font-semibold tracking-wide"  data-column="email">
              Email
            </th>
            <th className="text-sm font-semibold tracking-wide" data-column="date">
              Date
            </th>
            <th className="text-sm font-semibold tracking-wide" >Status</th>
            <th className='rounded-r-lg text-sm font-semibold tracking-wide'>Action</th>
          </tr>
        </thead>
        <tbody className=' divide-y divide-gray-100 '>
          {slicedData.map((order) => (
            <tr key={order.id} className="border mb-4 bg-white rounded-l-lg py-2 hover:bg-blue-700  ">
              <td className="p-4 text-sm text-gray-700 whitespace-nowrap mb-4 rounded-l-lg hover:bg-blue-700 hover:text-white">{order.id}</td>
              <td className="p-4 text-sm text-gray-700 whitespace-nowrap hover:text-white">{order.name}</td>
              <td className="p-4 text-sm text-gray-700 whitespace-nowrap hover:text-white">{order.email}</td>
              <td className="p-4 text-sm text-gray-700 whitespace-nowrap hover:text-white">{order.date}</td>
              <td className={`p-4 text-sm text-gray-700 whitespace-nowrap hover:text-white ${ order.status === "pending" ? 'text-red-500': order.status === "completed" ? 'text-gray-400' : "text-green-300" }`}>{order.status}</td>
              <td className="p-4 text-sm text-gray-700 whitespace-nowrap hover:text-white">{order.action}</td>
            </tr>
          ))}
        </tbody>
      </table></div>

      <div className="flex justify-end items-center mt-4">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`mx-1 px-3 py-1 bg-white rounded ${pageNumber === currentPage
                ? 'text-blue-500 '
                : 'text-gray-300'
              }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default OrderTable;


