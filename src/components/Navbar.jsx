import React from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { getFromCard, getWishList } from "../utilities";

const Navbar = () => {
  const number_of_card = getFromCard().length;
  const number_of_wish_list = getWishList().length;
  console.log(useLocation().pathname);
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
                className={
                  useLocation().pathname == "/"
                    ? "text-orange-500 font-bold border border-mainBg px-3 py-2 rounded-[32px] backdrop-blur-xl bg-mainBg/10"
                    : "text-black border border-white px-3 py-2 rounded-[32px]"
                }
              >
                Home
              </NavLink>
              {/* <NavLink
                to="/statistics"
                className={
                  useLocation().pathname == "/statistics"
                    ? "text-orange-500 font-bold border border-mainBg px-3 py-2 rounded-[32px] backdrop-blur-xl bg-mainBg/10"
                    : "text-black border border-white px-3 py-2 rounded-[32px]"
                }
              >
                Statistics
              </NavLink> */}
              <NavLink
                to="/dashboard"
                className={
                  useLocation().pathname == "/dashboard"
                    ? "text-orange-500 font-bold border border-mainBg px-3 py-2 rounded-[32px] backdrop-blur-xl bg-mainBg/10"
                    : "text-black border border-white px-3 py-2 rounded-[32px]"
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/feedback"
                className={
                  useLocation().pathname == "/feedback"
                    ? "text-orange-500 font-bold border border-mainBg px-3 py-2 rounded-[32px] backdrop-blur-xl bg-mainBg/10"
                    : "text-black border border-white px-3 py-2 rounded-[32px]"
                }
              >
                Feedback
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
              className={
                useLocation().pathname == "/"
                  ? "text-orange-500 font-bold border border-mainBg px-3 py-2 rounded-[32px] backdrop-blur-xl bg-mainBg/10"
                  : "text-black border border-white px-3 py-2 rounded-[32px]"
              }
            >
              Home
            </NavLink>
            {/* <NavLink
              to="/statistics"
              className={
                useLocation().pathname == "/statistics"
                  ? "text-orange-500 font-bold border border-mainBg px-3 py-2 rounded-[32px] backdrop-blur-xl bg-mainBg/10"
                  : "text-black border border-white px-3 py-2 rounded-[32px]"
              }
            >
              Statistics
            </NavLink> */}
            <NavLink
              to="/dashboard"
              className={
                useLocation().pathname == "/dashboard"
                  ? "text-orange-500 font-bold border border-mainBg px-3 py-2 rounded-[32px] backdrop-blur-xl bg-mainBg/10"
                  : "text-black border border-white px-3 py-2 rounded-[32px]"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/feedback"
              className={
                useLocation().pathname == "/feedback"
                  ? "text-orange-500 font-bold border border-mainBg px-3 py-2 rounded-[32px] backdrop-blur-xl bg-mainBg/10"
                  : "text-black border border-white px-3 py-2 rounded-[32px]"
              }
            >
              Feedback
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-center items-center gap-2 md:gap-4">
            <Link
              to="/dashboard"
              className="bg-white border rounded-full w-8 lg:w-10 h-8 lg:h-10 flex justify-center items-center"
            >
              <div className="relative">
                <BsCart3 size={20} color="black" />
                <p className="font-sora absolute bottom-4  left-4 bg-slate-500 h-5 w-5 text-center rounded-full text-white">
                  {number_of_card}
                </p>
              </div>
            </Link>
            <Link
              to="/dashboard"
              className="bg-white border rounded-full w-8 lg:w-10 h-8 lg:h-10 flex justify-center items-center"
            >
              <div className="relative">
                <IoMdHeartEmpty size={20} color="black" />
                <p className="font-sora absolute bottom-4  left-4 bg-slate-500 h-5 w-5 text-center rounded-full text-white">
                  {number_of_wish_list}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
