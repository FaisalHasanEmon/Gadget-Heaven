import React from "react";

const Heading = ({ title = "", subtitle = "" }) => {
  return (
    <div className="w-[350px] lg:w-[796px] flex flex-col justify-center items-center gap-4 text-[#FFFFFF]">
      <h1 className="font-bold text-[32px] text-center">{title}</h1>
      <p className="font-normal text-base  text-center">{subtitle}</p>
    </div>
  );
};

export default Heading;
