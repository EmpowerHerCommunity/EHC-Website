
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
    <div className='rounded-lg'> 
      <table className='pl-9 w-full'>
        <thead className='text-left text-lg'>
          <tr  className='text-lg font-semibold'>
            <th data-column="id" className="py-6 font-semibold tracking-wide rounded-l-lg" onClick={handleSort}>
              ID
              {sortConfig.column === 'id' && sortConfig.direction === 'asc' && <span>↑</span>}
              {sortConfig.column === 'id' && sortConfig.direction === 'desc' && <span>↓</span>}
            </th>
            <th data-column="name" className="font-semibold tracking-wide" onClick={handleSort}>
              Name
            </th>
            <th className="font-semibold tracking-wide"  data-column="email">
              Email
            </th>
            <th className="font-semibold tracking-wide" data-column="date">
              Date
            </th>
            <th className="font-semibold tracking-wide" >Status</th>
          </tr>
        </thead>
        <tbody className=' divide-y divide-gray-100 cursor-pointer '>
          {slicedData.map((order) => (
            <tr key={order.id} className=" h-16 mb-4 text-base bg-white rounded-l-lg py-2 hover:shadow-lg hover:scale-100 hover:text-slate-100 hover:bg-primary">
              <td className="whitespace-nowrap mb-4 rounded-l-l">{order.id}</td>
              <td className="whitespace-nowrap">{order.name}</td>
              <td className=" whitespace-nowrap">{order.email}</td>
              <td className="whitespace-nowrap">{order.date}</td>
              <td className={`whitespace-nowrap ${ order.status === "pending" ? 'text-red-500': order.status === "completed" ? 'text-gray-400' : "text-green-300" }`}>{order.status}</td>
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


