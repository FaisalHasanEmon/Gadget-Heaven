import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import { useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { LiaSortSolid } from "react-icons/lia";
import {
  getFromCard,
  getWishList,
  removeCardItem,
  purchased,
} from "../utilities";
import DashboardData from "../components/DashboardData";
import toast, { Toaster } from "react-hot-toast";
const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  const [isCard, setIstCard] = useState(true);
  const data_of_card = getFromCard();
  const wish_data = getWishList();

  const [card_data, setCardData] = useState(data_of_card);
  const [totalCost, setTotalCost] = useState(0);

  const handleSort = () => {
    const sorted = [...data_of_card].sort((a, b) => b.price - a.price);
    setCardData(sorted);
  };

  useEffect(() => {
    const cost = data_of_card.reduce((total, item) => total + item.price, 0);
    setTotalCost(cost);
  }, []);

  const handleRemoveCard = (id) => {
    removeCardItem(id);
    const favorites = getFromCard();
    setCardData(favorites);
    const gadget = data_of_card.find((item) => item.product_id === id);
    const gadgetPrice = gadget ? gadget.price : 0;
    setTotalCost(totalCost - gadgetPrice);
  };
  const handlePurchased = () => {
    purchased();
    setCardData([]);
  };

  const handleIsCard = (choice) => {
    setIstCard(choice);
  };

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
          <button
            onClick={() => handleIsCard(true)}
            className={`${
              isCard ? "bg-white text-mainBg" : "bg-transparent text-white"
            } btn w-[169px] rounded-[50px]`}
          >
            Cart
          </button>
          <button
            onClick={() => handleIsCard(false)}
            className={`${
              !isCard ? "bg-white text-mainBg" : "bg-transparent text-white"
            } btn w-[203px] rounded-[50px]`}
          >
            Wishlist
          </button>
        </div>
      </div>

      {/* Card Data Starts */}
      <div className={`${isCard ? "block container mx-auto px-7" : "hidden"} `}>
        <div className="flex justify-between items-center font-bold text-xl">
          <p>Cart</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-5 font-bold text-xl">
            <p>Total Coast: {totalCost}</p>
            <button
              onClick={() => handleSort()}
              className="btn font-medium text-lg"
            >
              Sort By Price <LiaSortSolid size={25} />
            </button>
            <button
              className="btn font-medium text-lg"
              onClick={() => handlePurchased()}
            >
              Purchase
            </button>
          </div>
        </div>
        {/* card data */}
        <div>
          {card_data.map((data) => (
            <DashboardData
              key={data.product_id}
              data={data}
              type="card"
              handleRemoveCard={handleRemoveCard}
            ></DashboardData>
          ))}
        </div>
      </div>
      {/* Card Data Starts */}

      {/* Wish List Data Starts */}
      <div className={`${!isCard ? "block" : "hidden"} container mx-auto mt-5`}>
        <div>
          <p className="font-bold text-xl">Wish List</p>
        </div>
        <div>
          {wish_data.map((data) => (
            <DashboardData key={data.product_id} data={data}></DashboardData>
          ))}
        </div>
      </div>
      {/* Wish List Data Ends */}
    </div>
  );
};

export default Dashboard;
