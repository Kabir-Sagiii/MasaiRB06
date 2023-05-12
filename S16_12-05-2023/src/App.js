import logo from "./logo.svg";
import "./App.css";
import { Button } from "@chakra-ui/react";
// import Button from "./Components/Button";
import BoxComp from "./Components/Box/BoxComp";
import StackComp from "./Components/Stack/StackComp";
import SimpleGridComp from "./Components/SimpleGrid/SimpleGridComp";
import GridComp from "./Components/Grid/GridComp";
import FlexComp from "./Components/Flex/FlexComp";
import AlertDialogComp from "./Components/AlertDialog/AlertDialogComp";
import ModalComp from "./Components/Modal/ModalComp";
import Responsive from "./Components/Responsive/Responsive";
import FormComp from "./Components/Forms/FormComp";

function App() {
  return (
    <div className="App">
      <FormComp />
      {/* <Responsive /> */}
      {/* <ModalComp /> */}
      {/* <AlertDialogComp /> */}
      {/* <FlexComp /> */}
    </div>
  );
}

export default App;
