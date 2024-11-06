import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const GadgetCategories = () => {
  //   const { gadgets } = useParams();
  const data = useLoaderData();
  console.log("I am param", gadgets);
  console.log("I am loader: ", data);
  return <div className="w-10">This is Categories</div>;
};

export default GadgetCategories;
