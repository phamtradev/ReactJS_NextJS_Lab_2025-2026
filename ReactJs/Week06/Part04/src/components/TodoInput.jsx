import { useState } from "react";
import { useTodo } from "../context/TodoContext";

export default function TodoInput() {
  const [text, setText] = useState("");
  const { addTodo } = useTodo();

  const handleAdd = () => {
    if (!text) return;
    addTodo(text);
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập todo..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}