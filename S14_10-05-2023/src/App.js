import "./App.css";
import Nav from "./Components/Products/Nav";
import Home from "./Components/Products/Home";
import Products from "./Components/Products/Products";
import Cart from "./Components/Products/Cart";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
