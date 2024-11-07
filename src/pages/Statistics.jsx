import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const Statistics = () => {
  useEffect(() => {
    document.title = "Statistics";
  }, []);
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <h1>I am at Statistics</h1>
    </div>
  );
};

export default Statistics;
