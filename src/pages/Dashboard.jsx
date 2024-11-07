import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import { useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  return (
    <div className="font-sora">
      <div className="container mx-auto ">
        <Navbar></Navbar>
      </div>
      <div className=" bg-mainBg  flex flex-col justify-start items-center py-8 ">
        <Heading
          title="Dashboard"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Heading>
        <div className="flex gap-6 mt-8">
          <button className="btn w-[169px] rounded-[50px]">Cart</button>
          <button className="btn w-[203px] rounded-[50px]">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
