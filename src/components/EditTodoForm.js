import { useState } from "react";

function EditTodoForm({ id, disableEditMode, initialValue, onEdit }) {
  const [todoValue, setTodoValue] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoValue) {
      onEdit(id, todoValue);
      disableEditMode(false);
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
          Update Task
        </button>
      </form>
    </div>
  );
}

export default EditTodoForm;
