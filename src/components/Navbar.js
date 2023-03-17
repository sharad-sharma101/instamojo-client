import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
        <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
          <div className="text-md font-bold text-blue-700 lg:flex-grow">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Dashboard
            </Link>
            <Link
              to="/create"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Create Invoice+
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
