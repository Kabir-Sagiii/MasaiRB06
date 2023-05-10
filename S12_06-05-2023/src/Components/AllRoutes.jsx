import React from "react";
import Home from "./Context/Home";
import Help from "./Context/Help";
import Product from "./Context/Product";
import Profile from "./Context/Profile";
import ProductDetails from "./ProductDetails";
import Login from "./Context/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { AuthContext } from "./Context/Auth";
import { useContext } from "react";
import Protected from "./Protected";

function AllRoutes(props) {
  const { isloggedin } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={isloggedin ? <Home /> : <Login />} />
      <Route
        path="/profile"
        element={isloggedin ? <Profile /> : <Navigate to="/" />}
      />
      <Route
        path="/products"
        element={isloggedin ? <Product /> : <Navigate to="/" />}
      />
      <Route
        path="/help"
        element={
          <Protected>
            <Help />
          </Protected>
        }
      />
      <Route
        path="/details/:id"
        element={isloggedin ? <ProductDetails /> : <Navigate to="/" />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AllRoutes;
