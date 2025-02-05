import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ product }) => {
  const navigate = useNavigate();
  const { product_title, price, product_image } = product || {};
  return (
    <div>
      <div className="p-4 flex flex-col border justify-center items-center rounded-xl bg-[#FFFFFF]">
        <figure className="w-[280px] lg:h-[181px] overflow-hidden rounded-xl">
          <img
            className="object-fill h-full w-full"
            src={product_image}
            alt=""
          />
        </figure>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h3 className="mt-6 font-semibold text-2xl text-[#09080F]">
              {product_title}
            </h3>
            <p className="mt-3">Price: {price}k</p>
          </div>
          <div>
            <button
              onClick={() => navigate("/details", { state: product })}
              className="mt-4 btn btn-outline btn-secondary"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
