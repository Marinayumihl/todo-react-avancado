import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodo();

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTodo(todo.id)}>
        {todo.text}
      </span>

      <button onClick={() => removeTodo(todo.id)}>
        Remover
      </button>
    </li>
  );
}

export default TodoItem;