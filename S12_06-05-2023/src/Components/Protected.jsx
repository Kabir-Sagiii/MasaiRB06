import React from "react";
import { useContext } from "react";
import { AuthContext } from "./Context/Auth";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const { isloggedin } = useContext(AuthContext);
  if (isloggedin) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default Protected;
