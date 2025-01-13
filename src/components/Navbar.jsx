import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-extrabold text-black">Think.ai Bot</h1>
        <div className="space-x-6">
          <Link
            to="/auth/login"
            className="text-gray-800 font-bold hover:text-gray-700 transition duration-300 ease-in-out"
          >
            Login
          </Link>
          <Link
            to="/auth/register"
            className="text-gray-800 font-bold hover:text-gray-700 transition duration-300 ease-in-out"
          >
            Sign Up
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
