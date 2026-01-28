import { useState } from "react";
import "./TodoInput.css";

const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button type="submit">Thêm</button>
    </form>
  );
};

export default TodoInput;
