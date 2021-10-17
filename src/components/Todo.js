import React from "react";
import { useDispatch } from "react-redux";
import { changeTaskStatus, deleteTask } from "../store/reducers/taskReducer";

const Todo = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo">
      <li className={`todo-item ${task.completed && "completed"}`}>
        {task.text}
      </li>
      <button
        onClick={() => dispatch(changeTaskStatus(task))}
        className="complete-btn"
      >
        <i className="fas fa-check"></i>
      </button>
      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="trash-btn"
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
