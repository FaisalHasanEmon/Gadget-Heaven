import React from "react";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
