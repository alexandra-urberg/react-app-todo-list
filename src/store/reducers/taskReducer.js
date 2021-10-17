const SET_TASKS = "SET_TASKS";
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_FILE";
const CHANGE_TASK_STATUS = "CHANGE_TASK_STATUS";
const SET_FILTERED_TASKS = "SET_FILTERED_TASKS";

const defaultState = {
  timer: [],
  filteredTasks: [],
};

// Reducer

export default function taskReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, tasks: action.payload };
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== action.payload)],
      };
    case CHANGE_TASK_STATUS:
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task) => {
            return task.id === action.payload.id
              ? { ...task, completed: !task.completed }
              : { ...task };
          }),
        ],
      };
    case SET_FILTERED_TASKS:
      return {
        ...state,
        filteredTasks: action.payload,
      };

    default:
      return state;
  }
}

// Action creators

export const setTasks = (tasks) => ({ type: SET_TASKS, payload: tasks });
export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const deleteTask = (taskId) => ({ type: DELETE_TASK, payload: taskId });
export const changeTaskStatus = (task) => ({
  type: CHANGE_TASK_STATUS,
  payload: task,
});
export const setFilteredTasks = (task) => ({
  type: SET_FILTERED_TASKS,
  payload: task,
});
