import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

const DashboardData = ({
  data,
  type = "",
  handleRemoveCard,
  handleRemoveWish,
}) => {
  // const [ishidden, setIsHidden] = useState("hidden");
  const { product_image, product_title, description, price, product_id } = data;

  return (
    <div className="my-6">
      <div className="flex justify-between items-start bg-[#FFFFFF] p-8 rounded-2xl  border">
        {/* This Div for Data */}
        <div className="flex flex-col lg:flex-row justify-center items-start  gap-8">
          <figure className="w-[275px] h-[192px] overflow-hidden rounded-xl ">
            <img className="w-[275px] h-[192px]" src={product_image} alt="" />
          </figure>
          <div className=" space-y-4">
            <p className="text-2xl font-semibold">{product_title}</p>
            <p className="text-lg font-normal">
              <span className="text-black">Description:</span> {description}
            </p>
            <p className="text-xl font-semibold">Price: ${price}</p>
            <button
              className={`${
                type == "card" ? "hidden" : "block"
              } btn bg-mainBg text-white rounded-[50px]`}
            >
              Add to Card
            </button>
          </div>
        </div>

        {/* This Div For Delete */}
        <div>
          <RxCrossCircled
            onClick={() => {
              type == "card"
                ? handleRemoveCard(product_id)
                : handleRemoveWish(product_id);
            }}
            color="red"
            size={30}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardData;
