import axios from "axios";

export const getProductData = (dispatch) => {
  setTimeout(() => {
    axios
      .get("http://localhost:5001/products")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "SUCCESS", payload: res.data });
      })
      .catch(() => {
        dispatch({ type: "ERROR" });
      });
  }, 2000);
};

export const addToCart = (data) => {
  axios.post("http://localhost:5001/cart", data).then(() => {
    alert("Added the Product in the Cart");
  });
};
