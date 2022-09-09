import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Routing = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default Routing;
