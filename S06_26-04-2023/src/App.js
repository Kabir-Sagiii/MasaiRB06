import "./App.css";
import { useState } from "react";
// import Parent from "./components/Parent-Child/Parent";
import Parent from "./components/Child-Parent/Parent";
import Image from "./components/Lifecycle/Image";
import Title from "./components/Lifecycle/Title";

function App() {
  const [showimage, setShowImage] = useState(true);
  return (
    <div className="App">
      {/* <Title /> */}
      {showimage ? <Image /> : <Title />}
      <div style={{ marginTop: "50px" }}>
        <button
          onClick={() => {
            setShowImage(true);
          }}
        >
          Show Image
        </button>
        &nbsp;&nbsp;
        <button
          onClick={() => {
            setShowImage(false);
          }}
        >
          Show Title
        </button>
      </div>
    </div>
  );
}

export default App;
