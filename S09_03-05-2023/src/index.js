import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./Header";
import AuthProviderComp from "./Components/Context/Auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProviderComp>
    <App />
  </AuthProviderComp>
);
