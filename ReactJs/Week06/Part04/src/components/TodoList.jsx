import { useTodo } from "../recoil/todoState";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useTodo();

  return (
    <div>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} />
      ))}
    </div>
  );
}
