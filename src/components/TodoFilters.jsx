import { useTodo } from "../context/TodoContext";

function TodoFilters() {
  const { filter, setFilter } = useTodo();

  return (
    <div className="todo-filters">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        Todas
      </button>

      <button
        className={filter === "pending" ? "active" : ""}
        onClick={() => setFilter("pending")}
      >
        Pendentes
      </button>

      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => setFilter("completed")}
      >
        Concluídas
      </button>
    </div>
  );
}

export default TodoFilters;