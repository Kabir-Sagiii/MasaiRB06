import logo from "./logo.svg";
import "./App.css";
import Todo from "./Components/Todo";
import TodoItem from "./Components/TodoItem";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Todo />
      <TodoItem />
    </div>
  );
}

export default App;
