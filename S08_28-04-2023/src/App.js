import "./App.css";
import { useState } from "react";
import Timer from "./components/UseRef-Forms/Timer";
import FormComp from "./components/UseRef-Forms/FormComp";

function App() {
  const [showimage, setShowImage] = useState(true);
  return (
    <div className="App">
      <FormComp />
      <Timer />
    </div>
  );
}

export default App;
