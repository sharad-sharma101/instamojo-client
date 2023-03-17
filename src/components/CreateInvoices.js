import React, { useState } from "react";
import axios from "axios";
const CreateInvoices = () => {
  const [name, setname] = useState("");
  const [gmail, setgmail] = useState("");
  const [cgmail, setcgmail] = useState("");
  const [amount, setamount] = useState();
  const [phone, setphone] = useState("");
  
  // function to hundle create invoice
  const hundle = async (e) => {
    e.preventDefault();
    alert("This invoice is added wait for sec. Thank You");
    const invoice = {
      name: name,
      amount: amount,
      gmail: gmail,
    };
    setname("");
    setamount("");
    setgmail("");
    setcgmail("");
    setphone("");
    // try to post invoice 
    try {
      const res = await axios.post(
        "https://instamojo-test-server.onrender.com/api/invoice/create",
        invoice
      );
      console.log(res.data);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className=" bg-white rounded-lg flex justify-center h-full">

         {/* form to fill invoice detail */}
      <form className="w-5/6" onSubmit={hundle}>
        
        {/* name feild */}
        <div className="w-full relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Name"
            onChange={(e) => {
              setname(e.target.value);
            }}
            required
          />
        </div>

        {/* email feild */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="gmail"
            name="floating_gmail"
            id="floating_gmail"
            className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="gmail"
            onChange={(e) => {
              setgmail(e.target.value);
            }}
            required
          />
        </div>

        {/* confirm email feild */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="gmail"
            name="floating_gmail"
            id="floating_gmail"
            className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Confirm gmail"
            value={cgmail}
            onChange={(e) => {
              setcgmail(e.target.value);
            }}
            required
          />
        </div>

        {/* amount feild */}
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Amount"
              onChange={(e) => {
                setamount(e.target.value);
              }}
              required
            />
          </div>

          {/* phone number feild */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => {
                setphone(e.target.value);
              }}
              required
            />
          </div>
        </div>

        {/* submit button */}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default CreateInvoices;
