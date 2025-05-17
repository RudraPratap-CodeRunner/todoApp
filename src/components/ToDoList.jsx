import ToDoItem from "./ToDoItem";

const ToDoList = ({ tasks, toggleComplete, deleteTask, editTask, toggleEdit }) => {
  return (
    <div className="mt-4">
      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleEdit={toggleEdit}
        />
      ))}
    </div>
  );
};

export default ToDoList;
