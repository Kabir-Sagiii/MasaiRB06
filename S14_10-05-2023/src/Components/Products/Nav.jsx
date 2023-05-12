import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div style={{ backgroundColor: "black", display: "flex" }}>
      <div
        style={{
          width: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <h2>My Product Cart</h2>
      </div>
      <div
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "50px",
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "50px",
          }}
          to="/products"
        >
          Products
        </Link>

        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "50px",
          }}
          to="/cart"
        >
          Cart
        </Link>
      </div>
    </div>
  );
}

export default Nav;
