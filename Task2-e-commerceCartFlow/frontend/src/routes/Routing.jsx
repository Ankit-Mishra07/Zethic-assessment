import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default Routing;
