import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Cart from "../Components/Cart";
import Signup from "../Components/Signup";
import Product from "../Components/Product";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
