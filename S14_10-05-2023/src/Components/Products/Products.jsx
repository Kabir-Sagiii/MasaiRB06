import { useEffect, useReducer } from "react";

import { productReducer } from "./productReducer";
import { getProductData, addToCart } from "../../api/api";
import ProductItem from "./ProductItem";
import Loader from "./Loader";
import Error from "./Error";

function Products(props) {
  const [state, dispatch] = useReducer(productReducer, {
    loading: false,
    error: false,
    data: [],
  });
  useEffect(() => {
    dispatch({ type: "LOADING" });
    getProductData(dispatch);
  }, []);

  return (
    <div>
      {state.loading ? (
        <Loader />
      ) : state.error ? (
        <Error />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "20px",
          }}
        >
          {state.data.map((product) => {
            return <ProductItem product={product} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
