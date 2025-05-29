import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";


const Body = () => {
  return (
    <div>
      <Navbar />
       <Outlet/>
      <Footer />
    </div>
  );
};

export default Body;
