import React from "react";
import { Link } from "react-router";
import { IoMdHome } from "react-icons/io";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      
      {/* 404 Title */}
      <h1 className="text-7xl font-bold text-green-800">404</h1>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-500 mt-2 max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved. 
        Please check the URL or go back to the homepage.
      </p>

      {/* Button */}
      <Link to="/">
        <button className="flex items-center gap-1 mt-6 px-6 py-3 bg-green-800 text-white rounded-lg shadow hover:bg-green-900 transition text-xl">
            <IoMdHome className="text-2xl" />  Go Home
        </button>
      </Link>

    </div>
  );
};

export default ErrorPage;