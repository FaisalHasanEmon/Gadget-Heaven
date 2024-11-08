import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import { LiaSortSolid } from "react-icons/lia";
import {
  getFromCard,
  getWishList,
  removeCardItem,
  purchased,
  removeWishItem,
  addItemsToCard,
} from "../utilities";
import DashboardData from "../components/DashboardData";

// Dynamic title for dashboard
const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  // Fetching data from local Storage
  const data_of_card = getFromCard();
  const wish_data = getWishList();

  // Use States
  const [isCard, setIstCard] = useState(true); // Switching between card and wishlist
  const [card_data, setCardData] = useState(data_of_card); //Handling add card data
  const [data_wish, setDataWish] = useState(wish_data); //Handling wishlist data
  const [totalCost, setTotalCost] = useState(0); //Handling total cost data

  //It's handling Sorting button
  const handleSort = () => {
    const sorted = [...data_of_card].sort((a, b) => b.price - a.price);
    setCardData(sorted);
  };

  // It's calculating the total amount
  useEffect(() => {
    const cost = data_of_card.reduce((total, item) => total + item.price, 0);
    setTotalCost(cost);
  }, []);

  // It's handling the cart list remove button
  const handleRemoveCard = (id) => {
    removeCardItem(id);
    const favorites = getFromCard();
    setCardData(favorites);
    const gadget = data_of_card.find((item) => item.product_id === id);
    const gadgetPrice = gadget ? gadget.price : 0;
    setTotalCost(totalCost - gadgetPrice);
  };

  // It's handling the wishlist remove button
  const handleRemoveWish = (id) => {
    removeWishItem(id);
    const favorites = getWishList();
    setDataWish(favorites);
  };

  // It's Handling the purchase button
  const handlePurchased = () => {
    purchased();
    const favorites = getFromCard();
    setCardData(favorites);
    setTotalCost(0);
  };

  // It's handling the Cart button and the wish list button
  const handleIsCard = (choice) => {
    setIstCard(choice);
  };

  //It's handling add to cart from wishlist
  const handleFromWishListToCartItem = (item) => {
    addItemsToCard(item);
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
      <div
        className={`${
          isCard ? "block container mx-auto px-7 mt-5" : "hidden"
        } `}
      >
        <div className="flex justify-between items-center font-bold text-xl">
          <p>Cart</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3  font-bold text-xl">
            <p>Total Coast: {totalCost}</p>
            <button
              onClick={() => handleSort()}
              className="btn font-medium text-lg"
              disabled={totalCost > 0 ? false : true}
            >
              Sort By Price <LiaSortSolid size={25} />
            </button>
            <button
              className="btn font-medium text-lg"
              onClick={() => document.getElementById("my_modal_1").showModal()}
              disabled={totalCost > 0 ? false : true}
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
      <div
        className={`${
          !isCard ? "block container mx-auto px-7 mt-7" : "hidden"
        }`}
      >
        <div>
          <p className="font-bold text-xl">Wish List</p>
        </div>
        <div>
          {wish_data.map((data) => (
            <DashboardData
              key={data.product_id}
              data={data}
              handleRemoveWish={handleRemoveWish}
              handleFromWishListToCartItem={handleFromWishListToCartItem}
            ></DashboardData>
          ))}
        </div>
      </div>
      {/* Wish List Data Ends */}
      {/* Modal For Purchased Data Starts */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-center">
          <h3 className="font-bold text-lg">Payment Successfully</h3>
          <p className="py-4">Thanks For Purchasing</p>
          <p>Total: {totalCost}</p>
          <div className="modal-action">
            <form method="dialog" className="mx-auto">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={() => handlePurchased()} className="btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
      {/* Modal For Purchased Data Ends */}
    </div>
  );
};

export default Dashboard;
