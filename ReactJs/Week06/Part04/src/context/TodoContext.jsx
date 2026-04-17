import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, text: newText } : t))
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);