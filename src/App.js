import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterTasks } from "./store/actions/tasks.js";
import "./App.css";

import Header from "./components/Header.js";
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";
import Footer from "./components/Footer.js";

function App() {
  const dispatch = useDispatch();

  const filterStatus = useSelector((state) => state.filter.filter);
  const tasks = useSelector((state) => state.task.tasks);

  React.useEffect(() => {
    dispatch(filterTasks(tasks, filterStatus));
  }, [dispatch, tasks, filterStatus]);

  return (
    <div className="app">
      <Header />
      <Form />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
