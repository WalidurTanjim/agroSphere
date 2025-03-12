import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#00543A]">
      <div className="w-full max-w-[600px] px-6 py-10 flex flex-col items-center justify-center">
        <img
          src="https://i.ibb.co/LvLq6d3/Group-29.png"
          alt="illustration"
          className="w-full object-contain"
        />
        <p className="text-[#fff] text-[1.2rem] text-center mt-6">
          Oops! It seems you followed a broken link.
        </p>

       <Link to="/">
       <button className="py-3 px-6 sm:px-8 rounded-full bg-[#fff] text-black mt-6 flex items-center gap-[10px]">
          <FaArrowLeftLong /> Back to home
        </button>
       </Link>
      </div>
    </div>
  );
};

export default NotFound;
