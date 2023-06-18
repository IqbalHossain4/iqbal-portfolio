import React from "react";
import NavBer from "../Shared/NavBer";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div>
      <NavBer />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
