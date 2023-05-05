import "./App.css";
import A from "./Components/Context/A";
import Nav from "./Components/Nav/Nav";

import { useState, useContext } from "react";
import { AuthContext } from "./Components/Context/Auth";
import AllRoutes from "./Components/AllRoutes";

function App() {
  const { isloggedin } = useContext(AuthContext);
  return (
    <div className="App">
      <Nav />
      <AllRoutes />
    </div>
  );
}

export default App;
