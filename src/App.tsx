import { useState } from "react";
import "./App.css";
import CountButton from "./components/CountButton";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  return (
    <>
      <h1>Shotta</h1>

      <h2>Hur många shots...</h2>

      <TodoForm onSubmit={(text) => setTodos([...todos, text])} />

      <CountButton />

      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
