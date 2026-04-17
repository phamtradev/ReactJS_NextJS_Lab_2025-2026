import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";


function App() {
  return (
    <TodoProvider>
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
    </TodoProvider>
  );
}

export default App;