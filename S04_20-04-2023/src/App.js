import "./App.css";
import { useState } from "react";
import Counter from "./Components/Counter";
import Post from "./Components/Post";
import User from "./Components/User";

function App() {
  let [state, setState] = useState(90);
  return (
    <div className="App">
      <User />
      {/* <Post /> */}
      {/* <h2>App Component</h2> */}
      <Counter />
    </div>
  );
}

export default App;
