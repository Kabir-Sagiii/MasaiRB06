import "./App.css";
import { useState } from "react";
// import Parent from "./components/Parent-Child/Parent";
import Parent from "./components/Child-Parent/Parent";
import Image from "./components/Lifecycle/Image";
import Title from "./components/Lifecycle/Title";
import Users from "./components/Lifecycle/Products";

function App() {
  const [showimage, setShowImage] = useState(true);
  return (
    <div className="App">
      {showimage ? <Image /> : <Title />}
      <br />
      <br />
      <button
        onClick={() => {
          setShowImage(true);
        }}
      >
        Show Image
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          setShowImage(false);
        }}
      >
        Show Title
      </button>
      {/* <Users /> */}
    </div>
  );
}

export default App;
