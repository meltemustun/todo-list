import "./App.css";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTask = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  const handleEdit = (id, value) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.value = value;
        }
        return todo;
      })
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm onAddTask={handleAddTask} />
      <TodoList todos={todos} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;
