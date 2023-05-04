import "./App.css";
import A from "./Components/Context/A";
import Nav from "./Components/Nav/Nav";
import Login from "./Components/Context/Login";
import Home from "./Components/Context/Home";
import { useState, useContext } from "react";
import { AuthContext } from "./Components/Context/Auth";

function App() {
  const { isloggedin } = useContext(AuthContext);
  return (
    <div className="App">
      <Nav />
      {isloggedin ? <Home /> : <Login />}
      {/* <A /> */}
    </div>
  );
}

export default App;
