import { useEffect, useState } from "react";
import axios from "axios";
function Cart(props) {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5001/cart").then((data) => {
      setCarts(data.data);
    });
  }, []);

  const removeProduct = (id) => {
    axios.delete(`http://localhost:5001/cart/${id}`).then((data) => {
      console.log(data);
      // alert("Removed Product From Cart");
      axios.get("http://localhost:5001/cart").then((data) => {
        setCarts(data.data);
      });
    });
  };
  return (
    <div>
      {carts.length > 0 &&
        carts.map((product) => {
          return (
            <div
              style={{
                display: "flex",
                width: "1000px",
                margin: "50px auto",
                boxShadow: "0 0 10px green",
                padding: "20px",
              }}
            >
              <div style={{ width: "40%" }}>
                <img src={product.image} width="100%" height="300" />
              </div>
              <div style={{ width: "60%", padding: "30px" }}>
                <dl>
                  <dt>
                    <b>Title</b>
                  </dt>
                  <dd>{product.title}</dd>
                  <dt>
                    <b>Price</b>
                  </dt>
                  <dd>$ {product.price}</dd>
                  <dt>
                    <b>Description</b>
                  </dt>
                  <dd>{product.description}</dd>
                </dl>
                <button
                  onClick={() => {
                    removeProduct(product.id);
                  }}
                >
                  Remove From Cart
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Cart;
