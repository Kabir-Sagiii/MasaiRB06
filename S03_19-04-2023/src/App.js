import "./App.css";
import { useState } from "react";
import Tech from "./Components/Tech";

import Counter from "./Components/Counter";

import A from "./Components/A";
import B from "./Components/B";

function App() {
  const [state, setState] = useState(90);
  return (
    <div className="App">
      <A />
      <B />
      {/* <Tech />
      <Counter countValue={state} onClick={setState} />

      <Counter countValue={state} onClick={setState} /> */}
    </div>
  );
}

export default App;
