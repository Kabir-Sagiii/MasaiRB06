import React from "react";
import Home from "./Context/Home";
import Help from "./Context/Help";
import Product from "./Context/Product";
import Profile from "./Context/Profile";
import ProductDetails from "./ProductDetails";
import { Routes, Route } from "react-router-dom";

function AllRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/products" element={<Product />} />
      <Route path="/help" element={<Help />} />
      <Route path="/details" element={<ProductDetails />} />
    </Routes>
  );
}

export default AllRoutes;
