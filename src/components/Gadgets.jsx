import React from "react";
import { BsListNested } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";

const Gadgets = ({ product_categories, children }) => {
  return (
    <div>
      <section className="font-sora container px-14 mx-auto ">
        <h1 className="font-bold text-[40px] text-center">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="flex">
          <div
            className="grid grid-cols-1  gap-6  border  p-6 bg-[#FFFFFF] rounded-2xl"
            role="tablist"
          >
            {product_categories.map((item) => (
              <NavLink
                to={`/gadgets/:${item.id}`}
                key={item.id}
                className={({ isActive }) =>
                  `px-[28px] py-[14px] text-left rounded-[32px] ${
                    isActive ? "bg-purple-500 text-white" : "bg-[#09080F0D]"
                  }`
                }
              >
                {item.category}
              </NavLink>
            ))}
          </div>
          <div className="border border-yellow-500 grid grid-cols-3"></div>
        </div>
      </section>
    </div>
  );
};

export default Gadgets;
// className="bg-[#09080F0D] px-[28px] py-[14px] text-left rounded-[32px]"
