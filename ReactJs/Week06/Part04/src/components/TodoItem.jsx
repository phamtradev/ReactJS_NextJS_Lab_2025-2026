import { useState } from "react";
import { useTodo } from "../context/TodoContext";

export default function TodoItem({ todo }) {
  const { deleteTodo, editTodo } = useTodo();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, text);
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}

      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}