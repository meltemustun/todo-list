import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ onAddTask, id, value }) {
  const [todoValue, setTodoValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoValue) {
      onAddTask({ id: uuidv4(), value: todoValue });
      setTodoValue("");
    }
  };

  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="What is the task today?"
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
        ></input>
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
