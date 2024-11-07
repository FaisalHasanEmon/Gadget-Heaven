import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import { useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import ReactStars from "react-rating-stars-component";

const Details = () => {
  const location = useLocation();
  const data = location.state;
  const [isAvailable, useIsAvailable] = useState(false);
  const {
    product_image,
    product_title,
    price,
    availability,
    description,
    specification,
    rating,
  } = data;

  useEffect(() => {
    document.title = "Details";
  }, []);

  return (
    <div>
      <div className="container mx-auto font-sora">
        <Navbar></Navbar>
      </div>
      <div className=" bg-mainBg h-[375px] flex flex-col justify-start items-center pt-8 ">
        <Heading
          title="Product Details"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Heading>
        <div className="w-[350px] lg:w-auto flex flex-col lg:flex-row justify-center items-start gap-8 p-2 lg:p-8 bg-white rounded-3xl mt-8 mb-10">
          <figure className="lg:w-[425px] lg:h-[503px]  rounded-2xl overflow-hidden">
            <img className="w-full h-full object-center" src={product_image} />
          </figure>
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">{product_title}</h2>
            <p className="font-semibold text-xl">Price : {price} $</p>
            <div>
              {availability ? (
                <div className="py-[7px] px-[14px] border border-green-500 text-center bg-[#309C081A] rounded-[50px] w-[100px]">
                  In Stock
                </div>
              ) : (
                <div className="py-[7px] px-[14px] border border-red-500 text-center bg-[#9c08081a] rounded-[50px] w-[120px]">
                  Out of Stock
                </div>
              )}
            </div>
            <p>{description}</p>
            <div>
              <p className="font-bold text-lg">Specification</p>
              <ul className="list-decimal ml-7 mt-3">
                {specification.map((specs) => (
                  <li>{specs}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-lg font-bold flex justify-start items-center gap-2">
                Rating <div className="h-3 w-3 bg-black"></div>
              </p>
              <div className="flex justify-start items-center gap-4">
                <ReactStars
                  count={5}
                  value={rating}
                  isHalf={true}
                  size={24}
                  activeColor="#ffd700"
                />
                <p className="w-[50px] h-8 bg-[#09080F0D] flex justify-center items-center text-sm font-medium rounded-[50px]">
                  {rating}
                </p>
              </div>
            </div>
            <div className="flex justify-start gap-4 items-center">
              <button className="btn bg-mainBg text-white hover:bg-green-500 rounded-[50px]">
                Add To Card <BsCart3 size={20} color="white" />
              </button>{" "}
              <IoMdHeartEmpty size={30} color="black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
