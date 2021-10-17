import { setFilteredTasks } from "../reducers/taskReducer";

export function filterTasks(tasks, filterStatus) {
  return (dispatch) => {
    const filteredTasks = tasks.filter((task) => {
      if (filterStatus === "completed") {
        return task.completed && task;
      } else if (filterStatus === "uncompleted") {
        return !task.completed && task;
      } else {
        return task;
      }
    });
    dispatch(setFilteredTasks(filteredTasks));
  };
}
