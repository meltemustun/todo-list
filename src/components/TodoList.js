import Todo from "./Todo";

function TodoList({ todos, onDelete, onEdit }) {
  return todos.map((todo) => {
    return (
      <Todo
        id={todo.id}
        value={todo.value}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );
  });
}

export default TodoList;
