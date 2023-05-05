import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div>
      <h2>Product Component</h2>
      {products.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "20px",
            padding: "10px",
            marginTop: "50px",
          }}
        >
          {products.map((product) => {
            return (
              <div
                style={{
                  width: "300px",
                  padding: "20px",
                  boxShadow: "0 0 10px black",
                }}
              >
                <img src={product.image} width="100%" height="200" />
                <h3>{product.title.slice(0, 25)}</h3>
                <p>${product.price}</p>
                <Link to={`/details/${product.id}`}>
                  <button>Product Details</button>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Product;
