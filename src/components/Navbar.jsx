import React from "react";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className="navbar md:pr-16 mt-1">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                to="/"
                className={({ isActive }) => isActive && "text-amber-600"}
              >
                Home
              </NavLink>
              <NavLink to="/statistics" className="text-black">
                Statistics
              </NavLink>
              <NavLink to="/dashboard" className="text-black">
                Dashboard
              </NavLink>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost font-bold text-xl">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">
            <NavLink
              to="/"
              className={({ isActive }) => isActive && "text-lime-300"}
            >
              Home
            </NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-center items-center gap-2 md:gap-4">
            <Link className="bg-white border rounded-full w-8 lg:w-10 h-8 lg:h-10 flex justify-center items-center">
              <BsCart3 size={20} color="black" />
            </Link>
            <Link className="bg-white border rounded-full w-8 lg:w-10 h-8 lg:h-10 flex justify-center items-center">
              <IoMdHeartEmpty size={20} color="black" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
