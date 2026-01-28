import "./TodoItem.css";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <button onClick={() => onDelete(todo.id)} className="delete-btn">
        Xóa
      </button>
    </div>
  );
};

export default TodoItem;
