import React from "react";
import { AiFillDelete } from "react-icons/ai";
const List = ({ ind, name, amount, status, id }) => {
  const url = "http://localhost:4000/"
//  const url = 'https://instamojo-test-server.onrender.com/'
  async function funDel() {
    const res = await fetch(
      `${url}api/invoice/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    alert("this invoice is delete refresh");
  }
  return (
    <div className="flex py-2 px-4 justify-between bg-white hover:bg-gray-200 ">
      <h3 className="text-lg font-normal ">{ind}</h3>
      <h3 className="text-lg font-normal w-1/4">{name}</h3>
      <h3 className="text-lg font-normal w-1/4">Rs. {amount}</h3>
      <button
        type="button"
        className={`text-white  ${
          status ? "bg-green-700" : "bg-red-700"
        } focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2`}
      >
        {status ? "paid" : "unpaid"}
      </button>
      <button
        type="button"
        onClick={() => {
          funDel();
        }}
        className="text-blue-700  border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
      >
        <AiFillDelete />
      </button>
    </div>
  );
};

export default List;

//${status ? 'green' :'red'}
