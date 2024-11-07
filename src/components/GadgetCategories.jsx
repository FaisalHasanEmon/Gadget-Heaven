import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Cards from "./Cards";

const GadgetCategories = () => {
  const { productID } = useParams();
  const data = useLoaderData();
  const [category, setCategory] = useState([]);
  console.log(category, productID);
  useEffect(() => {
    console.log(productID);
    if (productID) {
      const filteredData = [...data].filter((item) => item.id == productID);
      setCategory(filteredData);
    } else {
      setCategory(data);
    }
  }, [productID, data]);
  return (
    <>
      {category.map((item) => (
        <Cards key={item.product_id} product={item}></Cards>
      ))}
    </>
  );
};

export default GadgetCategories;
