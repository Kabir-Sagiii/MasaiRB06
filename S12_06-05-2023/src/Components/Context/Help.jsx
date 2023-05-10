import React from "react";
import { useSearchParams } from "react-router-dom";

function Help(props) {
  const [searchparams] = useSearchParams();
  return (
    <div>
      <h2>
        Help Component : {searchparams.get("name")} {searchparams.get("city")}
      </h2>
    </div>
  );
}

export default Help;
