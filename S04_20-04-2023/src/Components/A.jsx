import React from "react";
import Style from "./A.module.css";

function A(props) {
  return (
    <div>
      <h2 className={Style.h2} id={Style.a}>
        {" "}
        A Component
      </h2>
    </div>
  );
}

export default A;
