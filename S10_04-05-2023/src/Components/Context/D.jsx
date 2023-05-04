import { useContext } from "react";
import { myContext } from "./context";

function D() {
  const data = useContext(myContext);
  return (
    <div>
      <h2>D Component</h2>
      <p>{data}</p>
    </div>
  );
}

export default D;
