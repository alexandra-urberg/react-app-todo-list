import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo.js";

const TodoList = () => {
  const filteredTasks = useSelector((state) => state.task.filteredTasks).map(
    (task) => <Todo key={task.id} task={task} />
  );

  return (
    <div className="todo-container">
      <ul className="todo-list">{filteredTasks}</ul>
    </div>
  );
};

export default TodoList;
