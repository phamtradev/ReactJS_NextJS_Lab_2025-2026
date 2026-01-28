import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({ todos, onDelete }) => {
  if (todos.length === 0) {
    return <p className="empty-message">Chưa có công việc nào</p>;
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;
