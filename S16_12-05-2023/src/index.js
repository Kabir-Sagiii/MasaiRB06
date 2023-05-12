import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "200px", // 200 --- 400
  md: "400px", //4000 - 700
  lg: "700px",
  xl: "800px",
  "2xl": "1200px",
};
const customtheme = extendTheme({ breakpoints });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={customtheme}>
    <App />
  </ChakraProvider>
);
