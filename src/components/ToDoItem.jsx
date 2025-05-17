import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {faPen} from '@fortawesome/free-solid-svg-icons'

const ToDoItem = ({ task, toggleComplete, deleteTask, editTask, toggleEdit }) => {
  const [newText, setNewText] = useState(task.text);

  return (
    <div className="flex items-center justify-between bg-gray-100 p-2 mt-2 rounded">
      {task.isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="flex-grow mr-2 px-2 py-1"
          />
          <button
            onClick={() => editTask(task.id, newText)}
            className="text-green-600"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span
            onClick={() => toggleComplete(task.id)}
            className={`flex-grow cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
          >
            {task.text}
          </span>
          <div className="space-x-3">
            <button onClick={() => toggleEdit(task.id)} className="text-yellow-600"><FontAwesomeIcon icon={faPen} /></button>
            <button onClick={() => deleteTask(task.id)} className="text-red-600"><FontAwesomeIcon icon={faTrashCan} /></button>
          </div>
        </>
      )}
    </div>
  );
};

export default ToDoItem;
