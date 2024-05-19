import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import EditTodoForm from "./EditTodoForm";
import { useState } from "react";

function Todo({ id, value, onDelete, onEdit }) {
  const [isEditMode, setIsEditMode] = useState(false);

  if (isEditMode)
    return (
      <EditTodoForm
        initialValue={value}
        onEdit={onEdit}
        id={id}
        disableEditMode={setIsEditMode}
      />
    );

  return (
    <div className="Todo">
      <p className="incompleted">{value}</p>
      <div>
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => {
            setIsEditMode(true);
          }}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={(e) => {
            onDelete(id);
          }}
        />
      </div>
    </div>
  );
}

export default Todo;
