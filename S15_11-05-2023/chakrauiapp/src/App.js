import logo from "./logo.svg";
import "./App.css";
import { Button } from "@chakra-ui/react";
// import Button from "./Components/Button";
import BoxComp from "./Components/Box/BoxComp";
import StackComp from "./Components/Stack/StackComp";
import SimpleGridComp from "./Components/SimpleGrid/SimpleGridComp";
import GridComp from "./Components/Grid/GridComp";

function App() {
  return (
    <div className="App">
      <GridComp />
      {/* <SimpleGridComp /> */}
      {/* <BoxComp /> */}
      {/* <StackComp /> */}

      {/* <Button color={"green"} bg="black">
        Login
      </Button>
      &nbsp;&nbsp;
      <Button colorScheme="red" variant="outline">
        Register
      </Button> */}
      {/* <Button text="Login" />
      &nbsp;&nbsp;
      <Button text="Register" /> */}
    </div>
  );
}

export default App;
