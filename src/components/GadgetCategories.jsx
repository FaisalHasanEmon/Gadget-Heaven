import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Cards from "./Cards";

const GadgetCategories = () => {
  const { productID } = useParams();
  const data = useLoaderData();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (productID) {
      const id = parseInt(productID.replace(":", ""));
      const filteredData = [...data].filter((item) => item.id === id);
      setCategory(filteredData);
    } else {
      setCategory(data);
    }
  }, [productID, data]);

  return (
    <div className="grid grid-cols-3 gap-6">
      {category.map((item) => (
        <Cards key={item.id} product={item}></Cards>
      ))}
      {category.map((item) => console.log("Id: ", category.id))}
    </div>
  );
};

export default GadgetCategories;
