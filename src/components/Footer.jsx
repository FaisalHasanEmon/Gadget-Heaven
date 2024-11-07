import React from "react";
import Heading from "./Heading";

const Footer = () => {
  return (
    <div className="bg-base-200 mt-7">
      <footer className="flex flex-col justify-center items-center gap-7 text-base-content p-10 container mx-auto ">
        <Heading
          title={"Gadget Heaven"}
          subtitle={
            "Leading the way in cutting-edge technology and innovation."
          }
          text={"text-black"}
        ></Heading>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-[166px] border-t pt-7">
          <nav className="flex flex-col justify-between items-center ">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col justify-between items-center">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col justify-between items-center">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
