import { useContext } from "react";
import { myContext } from "./context";
import D from "./D";

function C() {
  let info = useContext(myContext);
  return (
    <div>
      <h2>C Component</h2>
      <p>{info}</p>
      <D />
    </div>
  );
}

export default C;
