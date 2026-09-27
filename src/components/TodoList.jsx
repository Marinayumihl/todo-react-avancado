import { useTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { filteredTodos } = useTodo();

  if (filteredTodos.length === 0) {
    return <p className="empty-message">Nenhuma tarefa encontrada.</p>;
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;