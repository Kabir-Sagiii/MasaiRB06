import React from "react";
import { addToCart } from "../../api/api";

function ProductItem({ product }) {
  return (
    <div style={{ boxShadow: "0 0 10px black", padding: "20px" }}>
      <img src={product.image} width={300} height={200} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button
        onClick={() => {
          addToCart(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
