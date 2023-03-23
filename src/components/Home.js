import React, { useEffect, useState } from "react";
import List from "./List";
import axios from "axios";
const Home = () => {
  const url = 'https://instamojo-test-server.onrender.com/'

// two state of data of invoice
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  // fetch all invoice function 
  async function fetchData() {
    try {
      const response = await axios.get(
        'https://instamojo-test-server.onrender.com/api/invoice/all'
      );
      setData(response.data);
      setFilterData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  //mount featch function 
  useEffect(() => {
    fetchData();
  }, []);

  // function to hundle if user pay invoice  
  async function hundleInvoice(ele) {
    if (!ele.status) {

      const data = {
        name: ele.name,
        gmail: ele.gmail,
        amount: ele.amount,
        user_id: ele._id,
        url: `https://instamojo-test-server.onrender.com/callback?user_id=${ele._id}`
        }
        axios.post(`${url}pay`, data).then(res => {
          console.log(res.data);
          window.location.replace(
            `${res.data}`
          );
        }).catch( (err) => console.log(err))
    } else {
      alert("this invoice i already paid");
    }
  }

  return (
    <div className="p-4 m-5 mb-20 rounded-lg">

    {/* some button to filter out paid and unpaid invoice */}
      <div className="my-2">
        <div className="flex justify-evenly">
          <button
            type="button"
            onClick={() => {
              setFilterData(data);
            }}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            All invoices
          </button>
          <button
            type="button"
            onClick={() => {
              setFilterData(data.filter((ele) => ele.status));
            }}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Paid invoices
          </button>
          <button
            type="button"
            onClick={() => {
              setFilterData(data.filter((ele) => !ele.status));
            }}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            unpaid invoices
          </button>
        </div>
      </div>

      {/* table of invoices */}
      <div className="flex flex-col mx-12 mt-5 drop-shadow-lg bg-white rounded-lg">
        <div className="flex py-2 px-4 justify-between bg-gray-200 ">
          <h3 className="text-lg font-normal">S No.</h3>
          <h3 className="text-lg font-normal">Name</h3>
          <h3 className="text-lg font-normal">Amount</h3>
          <h3 className="text-lg font-normal">Status</h3>
          <h3 className="text-lg font-normal">Delete</h3>
        </div>
        <div className="h-96 overflow-y-auto">
          {filterData.map((ele, index) => (
            <div
              key={index}
              onClick={() => {
                hundleInvoice(ele);
              }}
            >
              <List
                ind={index + 1}
                id={ele._id}
                name={ele.name}
                amount={ele.amount}
                status={ele.status}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
