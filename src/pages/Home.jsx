import React, { useEffect } from "react";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import banner from "../assets/banner.jpg";
import { getFromCard, getWishList } from "../utilities";

const Home = () => {
  const number_of_card = getFromCard().length;
  const number_of_wish_list = getWishList().length;
  const product_categories = useLoaderData();
  useEffect(() => {
    document.title = "Gadget Heaven";
  }, []);

  return (
    <div>
      {/* Navbar and Banner Section */}
      <section className="font-sora container mx-auto mt-[30px] mb-[150px] lg:mb-[500px]">
        {/*Main Nav  */}
        <div className="text-white w-full backdrop-blur-3xl rounded-[32px] bg-white/60 p-2 border">
          <div className="bg-mainBg border rounded-[32px] w-full h-[694px]">
            {/* Navbar Starts */}
            <div className="navbar md:pr-16 mt-7">
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
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
            {/* Navbar Ends */}

            {/* Heading Starts */}
            <div className="lg:w-[1120px] mt-[58px] mb-8 mx-auto space-y-6 flex flex-col justify-center items-center">
              <h1 className="font-bold text-4xl lg:text-[56px] lg:leading-[72px] text-center">
                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
              </h1>
              <p className="font-normal text-base text-center px-3">
                Explore the latest gadgets that will take your experience to
                <br /> the next level. From smart devices to the coolest
                accessories, we have it all!
              </p>
              <div>
                <Link>
                  <button className="btn rounded-[50px] font-bold text-xl text-mainBg mt-8 shadow-slate-400">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
            {/* Heading Ends */}

            {/* Banner starts */}
            <div className="w-full">
              <div className="w-[85%] lg:w-[1062px] lg:h-[563px] mx-auto backdrop-blur-2xl bg-white/30 margin lg:p-6 p-2 border border-white  rounded-[32px] absolute lg:-bottom-1/2 left-1/2 transform -translate-x-1/2">
                <figure className="border w-full h-full rounded-[32px] overflow-hidden">
                  <img className="object-fit w-full h-full" src={banner} />
                </figure>
              </div>
            </div>
            {/* Banner ends */}
          </div>
        </div>
      </section>

      <section className="font-sora container px-14 mx-auto ">
        <h1 className="font-bold text-3xl lg:text-[40px] text-center">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="flex flex-col  lg:flex-row gap-6 mt-12">
          <div
            className="grid grid-cols-2 lg:grid-cols-1  self-start gap-3 lg:gap-6  border p-2 lg:p-6 bg-[#FFFFFF] rounded-2xl"
            role="tablist"
          >
            {product_categories.map((item) => (
              <NavLink
                to={`/home/${item.id}`}
                key={item.id}
                className={({ isActive }) =>
                  `px-3 lg:px-[28px] py-[14px] flex justify-start items-center rounded-[32px]  ${
                    isActive ? "bg-purple-500 text-white" : "bg-[#09080F0D]"
                  }`
                }
              >
                {item.category}
              </NavLink>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Outlet></Outlet>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
