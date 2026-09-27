import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useTodo();

  function handleSubmit(event) {
    event.preventDefault();

    addTodo(text);
    setText("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;