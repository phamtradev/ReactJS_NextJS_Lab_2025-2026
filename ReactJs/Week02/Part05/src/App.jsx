import { useState } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Todo List</h1>
        <TodoInput onAdd={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
