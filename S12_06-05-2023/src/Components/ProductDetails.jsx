import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
  const { id } = useParams();
  const [state, setState] = useState({
    title: "",
    image: "",
    price: "",
  });
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
      });
  }, []);
  return (
    <div>
      <h2>Product Details : {id}</h2>
      <div>
        <img src={state.image} width={500} height={300} />
        <p>${state.price}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
