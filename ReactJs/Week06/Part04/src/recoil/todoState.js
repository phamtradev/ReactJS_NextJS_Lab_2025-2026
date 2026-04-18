import { atom, useRecoilState } from "recoil";

export const todoState = atom({
  key: "part04TodoState",
  default: [],
});

export function useTodo() {
  const [todos, setTodos] = useRecoilState(todoState);

  const addTodo = (text) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: Date.now(), text },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  };

  const editTodo = (id, newText) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return { todos, addTodo, deleteTodo, editTodo };
}
