import React from "react";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import toast, { Toaster } from "react-hot-toast";
const MainLayout = () => {
  return (
    <>
      <Toaster />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
