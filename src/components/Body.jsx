import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";


const Body = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
       <Outlet/>
      <Footer />
    </div>
  );
};

export default Body;
